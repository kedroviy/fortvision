import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CardListComponent } from './card-list.component';

describe('CardListComponent', () => {
  // Arrange 
  let component: CardListComponent;
  let fixture: ComponentFixture<CardListComponent>;
  
  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [MatSelectModule, BrowserAnimationsModule],
      declarations: [CardListComponent],
      schemas: [NO_ERRORS_SCHEMA],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardListComponent);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    // Assert
    expect(component).toBeTruthy();
  });

  it('onGoToComments should work correctly', () => {
    // Arrange
    const mockedCommentId = 13;

    const mockedCommentsIdEmit = spyOn(component.commentsId, 'emit');

    // Act
    component.onGoToComments(mockedCommentId);

    // Assert
    expect(mockedCommentsIdEmit).toHaveBeenCalledWith(mockedCommentId);
  });
});