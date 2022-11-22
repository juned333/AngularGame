import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Test1Component } from './components/test1/test1.component';
import { NextpageComponent } from './components/nextpage/nextpage.component';
RouterModule
@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    NextpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
