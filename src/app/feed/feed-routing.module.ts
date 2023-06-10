import { NgModule } from '@angular/core';
import { RouterModule, type Routes } from '@angular/router';

import { FeedListComponent } from './components';
import { CommentsListComponent } from '../comments'

const routes: Routes = [
    {
        path: 'feed',
        component: FeedListComponent,
        data: {
            title: 'feed'
        },
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FeedRoutingModule { }