import { InjectionToken } from '@angular/core';

import { AppInfoModel } from '../models/core.models';

export const constantsService = {
  App: 'test',
  Ver: '1.0',
  API_URL: 'https://github.com/kedroviy/',
}

export const Constants = new InjectionToken<AppInfoModel>('constantsService');

export const FeedAPI = new InjectionToken<string>('feedAPI', {
  providedIn: 'root',
  factory: () => 'http://localhost:3000/content/'
});

export const UsersAPI = new InjectionToken<string>('usersAPI', {
    providedIn: 'root',
    factory: () => 'http://localhost:3000/users'
});

export const MyPostsAPI = new InjectionToken<string>('myPostsAPI', {
    providedIn: 'root',
    factory: () => 'http://localhost:3000/my-posts'
});

export const ProfileAPI = new InjectionToken<string>('profileAPI', {
    providedIn: 'root',
    factory: () => 'http://localhost:3000/profile'
});

export const CommentsAPI = new InjectionToken<string>('commentsAPI', {
  providedIn: 'root',
  factory: () => 'http://localhost:3000/comments'
});
