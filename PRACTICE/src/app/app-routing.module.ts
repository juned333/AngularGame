import { NextpageComponent } from './components/nextpage/nextpage.component';
import { AppComponent } from './app.component';
import { Test1Component } from './components/test1/test1.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',component:Test1Component},
  {path:'app',component:AppComponent},
  {path:'nextpage',component:NextpageComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
