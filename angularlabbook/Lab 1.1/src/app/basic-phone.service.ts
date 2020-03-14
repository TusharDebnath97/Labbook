import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasicPhoneService {

  public getType()
  {
    return "Basic Phone";
  }
  constructor() { }
}
