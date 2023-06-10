import { NgModule } from '@angular/core';
import { RouterModule, type Routes } from '@angular/router';

import { CommentsListComponent } from './components';

const routes: Routes = [
    {
        path: 'comments/:postID',
        component: CommentsListComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CommentsRoutingModule { }