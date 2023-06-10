import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { CardModule } from '../card/card.module'
import { CommentsRoutingModule } from './comment-routing.module';
import { CommentViewComponent, CommentsListComponent } from './components';


@NgModule({
  declarations: [
    CommentsListComponent,
    CommentViewComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    CommentsRoutingModule,
    CardModule,
  ]
})
export class CommentsModule { }
