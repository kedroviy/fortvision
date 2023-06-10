import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, type HttpErrorResponse } from '@angular/common/http';
import { type Observable, throwError, catchError, retry, share, concatMap, firstValueFrom } from 'rxjs';

import { FeedAPI } from 'src/app/core/services/config-options.service';
import { PostsModel } from 'src/app/core/models/core.models';

@Injectable({
  providedIn: 'root'
})
export class PostHttpService {

  constructor(
    private http: HttpClient, 
    @Inject(FeedAPI) private feedUrl: string) { }

addPostInDB(post: any): Observable<any> {
    const url: string = this.feedUrl;
    const body = JSON.stringify(post);

    const options = {
      headers: new HttpHeaders({ 'content-type': 'application/json' })
    };
    
    return this.http
      .post<any>(url, body, options)
      .pipe(
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