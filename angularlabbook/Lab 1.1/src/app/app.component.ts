import { Component } from '@angular/core';
import {BasicPhoneService} from './basic-phone.service';
import {SmartPhoneService} from './smart-phone.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  public basic:string;
  public smart:string;
  mobileDetailsBasic:any[]=[{
    'mobileId':123,'mobileName':'Apple','mobileCost':100000,'mobileType':''
  }];

  mobileDetailsSmart:any[]=[{
    'mobileId':456,'mobileName':'Samsung','mobileCost':8000,'mobileType':''
    }];
  constructor(private _basicService:BasicPhoneService,private _smartService:SmartPhoneService)
  {

  }
  ngOnInit()
  {
      this.basic=this._basicService.getType();
      this.smart=this._smartService.getType();
      this.mobileDetailsBasic[0].mobileType=this.basic;
      this.mobileDetailsSmart[0].mobileType=this.smart;
      this.printMobileDetails();
  }
  

  printMobileDetails()
  {
         console.log("Mobile Id-"+this.mobileDetailsBasic[0].mobileId+" "+"Mobile Name-"+this.mobileDetailsBasic[0].mobileName+" "+"Mobille Cost-"+this.mobileDetailsBasic[0].mobileCost+" "+"Mobile Type-"+this.mobileDetailsBasic[0].mobileType);
         console.log("Mobile Id-"+this.mobileDetailsSmart[0].mobileId+" "+"Mobile Name-"+this.mobileDetailsSmart[0].mobileName+" "+"Mobille Cost-"+this.mobileDetailsSmart[0].mobileCost+" "+"Mobile Type-"+this.mobileDetailsSmart[0].mobileType);
  }
}
