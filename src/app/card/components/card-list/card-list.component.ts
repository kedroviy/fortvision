import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';

import { PostsModel } from 'src/app/core/models/core.models';

@Component({
    selector: 'app-card-list',
    templateUrl: './card-list.component.html',
    styleUrls: ['./card-list.component.scss']
})
export class CardListComponent {
    @Input() cardItem!: any;
    @Output() likedPost: EventEmitter<any> = new EventEmitter();
    @Output() unlikedPost: EventEmitter<any> = new EventEmitter();
    @Output() commentsId: EventEmitter<number> = new EventEmitter();

    @HostListener('contextmenu')
    onUnlikedPost(cardItem: any, event: MouseEvent) {
      if (event && event.preventDefault) {
          event.preventDefault();
      }
        this.unlikedPost.emit(cardItem);
    }

    onLikedPost(cardItem: any) {
        this.likedPost.emit(cardItem);
    }
    

    onGoToComments(item: any): void {
        this.commentsId.emit(item);
    }
}
