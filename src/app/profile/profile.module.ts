import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

import { SelfProfileComponent } from './components/';



@NgModule({
  declarations: [
    SelfProfileComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ]
})
export class ProfileModule { }
