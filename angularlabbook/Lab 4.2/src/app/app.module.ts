import { HttpClientModule } from '@angular/common/http';
import { BooklistService } from './booklist.service';
import { HttpModule } from '@angular/http';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { SearchPipe } from './filterBookData';
import { SearchAuthorPipe } from './filterBookAuthor';


@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    SearchPipe,
    SearchAuthorPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [BooklistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
