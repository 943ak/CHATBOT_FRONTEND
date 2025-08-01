import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './src/app/app.component';
import { LandingpageComponent } from './src/app/landingpage/landingpage.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    AppComponent, 
    LandingpageComponent 
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
