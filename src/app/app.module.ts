import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';
import { MatCommonModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { AppState } from 'src/app/core/store/states/layout.state';

import { FeedModule } from './feed/feed.module';
import { PostModule } from './post/post.module';
import { ProfileModule } from './profile/profile.module'
import { CommentsModule } from './comments/comments.module';
import { HeaderModule } from './header/header.module';




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
      BrowserModule,
      FormsModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      FeedModule,
      PostModule,
      HeaderModule,
      CommentsModule,
      HttpClientModule,
      MatCommonModule,
      MatListModule,
      MatButtonModule,
      MatIconModule,
      NgxsModule.forRoot([AppState]),
      NgxsReduxDevtoolsPluginModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
