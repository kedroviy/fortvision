import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, switchMap, flatMap } from 'rxjs';

import { SetCurrentUserProfile } from './core/store/actions/layout.actions';
import { ProfileHttpService } from './profile/services/profile-http.service';
import { ProfileModel } from './profile/models/profile.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  profile$!: Observable<any>;
  refreshProfile$ = new BehaviorSubject<boolean>(true);

  constructor(
    private router: Router,
    private profileHttpService: ProfileHttpService,
    private store: Store
  ) { }

  onOpenNewPostCreator(): void {
    const link = ['/post-creating',];
    this.router.navigate(link);
  }

  ngOnInit(): void {
    this.profile$ = this.refreshProfile$.pipe(switchMap(() =>
        this.profileHttpService.getProfileList()))
    
    this.profile$.subscribe(profile => this.store.dispatch(new SetCurrentUserProfile(profile)))
  }
}
