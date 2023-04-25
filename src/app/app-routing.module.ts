import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Patata1Component } from './patata1/patata1.component';

const routes: Routes = [
  {
    path:'patata',
    component:Patata1Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
