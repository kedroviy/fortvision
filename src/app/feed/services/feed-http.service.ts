import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, type HttpErrorResponse } from '@angular/common/http';
import { type Observable, throwError, catchError, retry, share, concatMap, firstValueFrom } from 'rxjs';
import { map } from 'rxjs/operators';

import { FeedAPI, UsersAPI } from 'src/app/core/services/config-options.service';
import { PostsModel } from 'src/app/core/models/core.models';

@Injectable({
  providedIn: 'root'
})
export class FeedHttpService {
  reactions!: number;

  constructor(
    private http: HttpClient, 
    @Inject(FeedAPI) private feedUrl: string,
    @Inject(UsersAPI) private usersUrl: string) { }

  getPostsList(firstValue: number, secondNumber: number): Observable<any> {
    return this.http.get<any>(this.feedUrl).pipe(
      map(response => response.slice(firstValue, secondNumber)),
      retry(1),
      share(),
      catchError(this.handleError)
    );
  }

  getUsersList(): Observable<any> {
    return this.http.get<any>(this.usersUrl).pipe(
      retry(1),
      share(),
      catchError(this.handleError)
    );
  }

  onIncreaseReaction(post: PostsModel): void {
    this.reactions = post.reactions++;
    
    this.http.put<PostsModel>(`http://localhost:3000/content/${post.id}`, post)
        .subscribe();
  }

  onDecreaseReaction(post: PostsModel): void {
    this.reactions = post.reactions--;
    
    this.http.put<PostsModel>(`http://localhost:3000/content/${post.id}`, post)
        .subscribe();
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