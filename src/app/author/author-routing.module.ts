import { NgModule } from '@angular/core';
import { RouterModule, type Routes } from '@angular/router';

import { AuthorDetailsComponent } from './components';

const routes: Routes = [
    {
        path: 'author',
        component: AuthorDetailsComponent,
        data: {
            title: 'author'
        },
    },
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthorRoutingModule { }