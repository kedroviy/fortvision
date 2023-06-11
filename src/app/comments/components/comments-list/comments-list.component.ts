import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngxs/store';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

import { AppState } from 'src/app/core/store/states/layout.state';
import { SetCurrentPostId } from 'src/app/core/store/actions/layout.actions';

import { firstLetterValidation, minLengthValidation } from './validators';
import { CommentsHttpService } from '../../services/comments-http.service';
import { CommentModel } from '../../models/comment.model';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentsListComponent implements OnInit {
    postId$!: Observable<any>;
    currentPost$!: Observable<any>
    comments$!: Observable<any>;
    profileUser$!: Observable<any>;
    refreshCommentsList$ = new BehaviorSubject<boolean>(true);
    currentPostId!: number;
    currentUser!: any;
    isValidateForm: boolean = false;
  
    constructor(
        private fb: FormBuilder,
        private commentsHttpService: CommentsHttpService,
        private store: Store,
    ) { 
        this.postId$ = this.store.select(AppState.postId);
        this.currentPost$ = this.store.select(AppState.post);
        this.profileUser$ = this.store.select(AppState.currentUserProfile);
    }
    
    public formGroup = this.fb.group({
        ['body']: ["", [firstLetterValidation, minLengthValidation, Validators.required]],
        ['postId']: [],
        ['user']: []
    });
    
    ngOnInit(): void {
        this.postId$.subscribe(id => this.currentPostId = id);
        this.profileUser$.subscribe((profile: any) => this.currentUser = {id: profile.id, username: profile.username});
        let id = this.currentPostId;
        
        this.comments$ = this.refreshCommentsList$.pipe(switchMap(() =>
        this.commentsHttpService.getComments()),
            map(comments => comments.filter(comment => comment.postId === id))
        )
    }
    
    public getControl(fieldName: string): FormControl {
        return this.formGroup.get(fieldName) as FormControl;
    }

    onPost(post: any): void {
        this.getControl('postId').setValue(this.currentPostId);
        this.getControl('user').setValue(this.currentUser);

        this.commentsHttpService.addCommentInDB(this.formGroup.value).subscribe(response => response);

        this.getControl('body').setValue('');
        let id = this.currentPostId;

        this.comments$ = this.refreshCommentsList$.pipe(switchMap(() =>
        this.commentsHttpService.getComments()),
            map(comments => comments.filter(comment => comment.postId === id))
        )
        this.commentsHttpService.refreshCommentsCount(post);

        this.formGroup.reset();
    }
}
