import {  Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'searchPipe'

})
export class SearchPipe implements PipeTransform {
    transform(books:any, search:any): any {
           if(search==undefined) return books;
           return books.filter(function(book:any){
               console.log(book);
               return book.title.toLowerCase().includes(search.toLowerCase());
           })
        }

  }
