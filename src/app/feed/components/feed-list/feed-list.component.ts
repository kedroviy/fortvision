import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Router } from '@angular/router';
import { SetCurrentPostId, SetCurrentPost } from '../../../core/store/actions/layout.actions';
import { BehaviorSubject, Observable, switchMap, mergeMap } from 'rxjs';
import { map } from 'rxjs/operators';

import { AppState } from 'src/app/core/store/states/layout.state';

import { PostsModel } from 'src/app/core/models/core.models';
import { FeedHttpService } from '../../services/feed-http.service';

@Component({
    selector: 'app-feed-list',
    templateUrl: './feed-list.component.html',
    styleUrls: ['./feed-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedListComponent implements OnInit {
    response$!: Observable<any>;
    refreshFeedList$ = new BehaviorSubject<boolean>(true);
    searchValue$!: Observable<any>;
    posts: any[] = [];
    search: string = '';
    firstValue: number = 0;
    secondValue: number = 5;

    constructor(
      private feedHttpService: FeedHttpService,
      private router: Router,
      private store: Store
    ) { this.searchValue$ = this.store.select(AppState.searchValue); }

    ngOnInit(): void {
      window.scroll(0 , 100);
      this.response$ = this.refreshFeedList$.pipe(mergeMap(() =>
      this.feedHttpService.getPostsList(this.firstValue, this.secondValue)))
      
      this.response$.subscribe((posts: any) => this.posts = [...posts])

      console.log(this.posts.length)

      this.posts.map(item => console.log(item))

      this.firstValue = this.secondValue
      this.secondValue = this.secondValue + 5;
      
      let searchValue = this.search;

      this.searchValue$.subscribe((value: string) => {
        if (value !== this.search) {
          this.search = value
          console.log(value)
        } 
      })
    }

    onScroll(): void {
        this.firstValue = this.secondValue
        this.secondValue = this.secondValue + 5;

        this.response$ = this.refreshFeedList$.pipe(switchMap(() =>
            this.feedHttpService.getPostsList(this.firstValue, this.secondValue)))

        this.response$.subscribe((posts: any) => this.posts.push(...posts))
        console.log(this.posts)
    }

    onLikedPost(cardItem: PostsModel): void {
        this.feedHttpService.onIncreaseReaction(cardItem);
    }

    onUnlikedPost(cardItem: PostsModel): void {
        this.feedHttpService.onDecreaseReaction(cardItem);
    }

    onGoToComments(item: any): void {
        this.store.dispatch(new SetCurrentPostId(item.id));
        this.store.dispatch(new SetCurrentPost({...item}));

        const link = ['/comments', 'postID:' + item.id];
        this.router.navigate(link);
    }
}
