import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FeedListComponent } from './feed';
import { PostCreatorComponent } from './post';
import { SelfProfileComponent } from './profile';
import { CommentsListComponent } from './comments';

const routes: Routes = [
  {
    path: 'feed',
    component: FeedListComponent,
  },
  {
    path: 'post-creating',
    component: PostCreatorComponent,
  },
  {
    path: 'comments/:postID',
    component: CommentsListComponent,
  },
  {
    path: 'profile',
    component: SelfProfileComponent,
    data: {
        title: 'my-profile'
    },
  },
  {
    path: '',
    redirectTo: '/feed',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
