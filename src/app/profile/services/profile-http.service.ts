import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, type HttpErrorResponse } from '@angular/common/http';
import { type Observable, throwError, catchError, retry, share } from 'rxjs';

import { ProfileAPI } from 'src/app/core/services/config-options.service';
import { ProfileModel } from '../models/profile.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileHttpService {
    
  constructor(
    private http: HttpClient, 
    @Inject(ProfileAPI) private profileAPI: string) { }

  getProfileList(): Observable<ProfileModel> {
    return this.http.get<ProfileModel>(this.profileAPI).pipe(
      retry(1),
      share(),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}