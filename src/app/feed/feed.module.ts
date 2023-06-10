import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { FeedListComponent } from './components/';
import { CardModule } from '../card/card.module';

@NgModule({
  declarations: [
    FeedListComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    InfiniteScrollModule,
  ]
})
export class FeedModule { }
