import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';

import { ProfileHttpService } from '../../services/profile-http.service';
import { ProfileModel } from '../../models/profile.model';

@Component({
  selector: 'app-self-profile',
  templateUrl: './self-profile.component.html',
  styleUrls: ['./self-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelfProfileComponent implements OnInit {
  profile$!: Observable<ProfileModel>;
  refreshProfile$ = new BehaviorSubject<boolean>(true);

  constructor(
    private profileHttpService: ProfileHttpService,
  ) {}

  ngOnInit(): void {
    this.profile$ = this.refreshProfile$.pipe(switchMap(() =>
        this.profileHttpService.getProfileList()))
    
    this.profile$.subscribe(post => console.log(post))
  }
}
