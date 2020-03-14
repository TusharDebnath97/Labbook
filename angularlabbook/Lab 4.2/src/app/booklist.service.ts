import { Injectable } from '@angular/core';
import { Book } from './book/book.component';
import { Observable } from 'rxjs/internal/Observable';
import {  HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BooklistService {

  constructor(private http:HttpClient) {}
	public getJSON():Observable<Book[]>{
			return this.http.get<Book[]>('assets/booklist.json');
    }
}

