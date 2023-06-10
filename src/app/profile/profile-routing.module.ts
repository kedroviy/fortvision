import { NgModule } from '@angular/core';
import { RouterModule, type Routes } from '@angular/router';

import { SelfProfileComponent } from './components';

const routes: Routes = [
    {
        path: 'profile',
        component: SelfProfileComponent,
        data: {
            title: 'my-profile'
        },
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProfileRoutingModule { }