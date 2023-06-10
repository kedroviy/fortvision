import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { formatDate } from '@angular/common' 
import { FormBuilder, FormControl, Validators } from '@angular/forms';

import { AppState } from 'src/app/core/store/states/layout.state';

import { FORM_FIELD } from '../../constants';
import { PostHttpService } from '../../services/post-http.service';

@Component({
  selector: 'app-post-creator',
  templateUrl: './post-creator.component.html',
  styleUrls: ['./post-creator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostCreatorComponent implements OnInit {
  profileUser$!: Observable<any>;
  FORM_FIELD = FORM_FIELD;
  timestamp!: string;
  currentUser!: any;

  constructor(
    private fb: FormBuilder, 
    private postHttpService: PostHttpService,
    private router: Router,
    private store: Store) { this.profileUser$ = this.store.select(AppState.currentUserProfile); }

  public formGroup = this.fb.group({
    [FORM_FIELD.TITLE]: ["", [Validators.required]],
    [FORM_FIELD.BODY]: "",
    [FORM_FIELD.TIMESTAMP]: `${this.timestamp}`,
    [FORM_FIELD.REACTIONS]: 0,
    [FORM_FIELD.USER_ID]: []
  });
  
  
  public getControl(fieldName: string): FormControl {
    return this.formGroup.get(fieldName) as FormControl;
  }
  
  ngOnInit(): void {
    this.profileUser$.subscribe((profile: any) => this.currentUser = {...profile});
  }

  onSave(): void {
    this.currentDate();
    this.getControl(FORM_FIELD.TIMESTAMP).setValue(this.timestamp);
    this.getControl(FORM_FIELD.USER_ID).setValue(this.currentUser);

    this.postHttpService.addPostInDB(this.formGroup.value).subscribe(response => response);
    
    this.router.navigate(['/feed']);
  }

  currentDate() {
    const date = new Date();
    
    let currentDay = String(date.getDate()).padStart(2, '0');
    let currentMonth = String(date.getMonth()+1).padStart(2,"0");
    let currentYear = date.getFullYear();
    let currentDate = `${currentYear}-${currentMonth}-${currentDay}`;

    this.timestamp = currentDate;
  }
}
