import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicPhoneService } from './basic-phone.service';
import {SmartPhoneService} from './smart-phone.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [BasicPhoneService,SmartPhoneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
