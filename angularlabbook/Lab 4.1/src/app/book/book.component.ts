import { BooklistService } from './../booklist.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books:Book[];

  constructor(private booklistservice: BooklistService) { }

  ngOnInit() {
   this.booklistservice.getJSON().subscribe((booksData)=>this.books=booksData);
  }

}
export interface Book
{
	id : number;
	title : string;
	year : number;
	author : string;
}
