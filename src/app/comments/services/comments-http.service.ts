import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, type HttpErrorResponse } from '@angular/common/http';
import { type Observable, throwError, catchError, retry, share, concatMap } from 'rxjs';

import { CommentsAPI } from 'src/app/core/services/config-options.service';
import { CommentModel } from '../models/comment.model';

@Injectable({
  providedIn: 'root'
})
export class CommentsHttpService {

  constructor(
    private http: HttpClient, 
    @Inject(CommentsAPI) private commentsUrl: string,
  ) { }

getComments(): Observable<CommentModel[]> {
    console.log('get comments')
    return this.http.get<CommentModel[]>(this.commentsUrl).pipe(
        retry(1),
        share(),
        catchError(this.handleError)
    );
}

// {
//   "id": 23,
//   "body": "What an astounding observation!",
//   "postId": 73,
//   "user": {
//     "id": 14,
//     "username": "mturleyd"
//   }
// }

addCommentInDB(comment: any): Observable<any> {
  const url: string = this.commentsUrl;

  const body = JSON.stringify(comment);
  
  const options = {
    headers: new HttpHeaders({ 'content-type': 'application/json' })
  };
  
  return this.http
    .post<any>(url, body, options)
    .pipe(
      catchError(this.handleError)
    );
}

// addCommentsInDB(post: any): Observable<any> {
//     const url: string = this.feedUrl;
//     const body = JSON.stringify(post);

//     const options = {
//       headers: new HttpHeaders({ 'content-type': 'application/json' })
//     };
    
//     return this.http
//       .post<any>(url, body, options)
//       .pipe(
//         catchError(this.handleError)
//       );
//   }

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