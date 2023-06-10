import { NgModule } from '@angular/core';
import { RouterModule, type Routes } from '@angular/router';

import { PostCreatorComponent } from './components';

const routes: Routes = [
    {
        path: 'post-creating',
        component: PostCreatorComponent,
        data: {
            title: 'create post'
        },
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PostRoutingModule { }