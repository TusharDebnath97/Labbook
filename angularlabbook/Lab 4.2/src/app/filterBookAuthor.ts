import {  Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'searchAuthorPipe'

})
export class SearchAuthorPipe implements PipeTransform {
    transform(books:any, search:any): any {
           if(search==undefined) return books;
           return books.filter(function(book:any){
               console.log(book);
               return book.author.toLowerCase().includes(search.toLowerCase());
           })
        }

  }
