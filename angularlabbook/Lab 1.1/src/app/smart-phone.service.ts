import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SmartPhoneService {

  public getType()
  {
    return "Smart Phone";
  }
  constructor() { }
}
