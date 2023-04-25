import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Patata1Component } from './patata1/patata1.component';
import { Patata2Component } from './patata2/patata2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SaludoComponent } from './components/saludo/saludo.component';
import { GritoComponent } from './components/grito/grito.component';

@NgModule({
  declarations: [
    AppComponent,
    Patata1Component,
    Patata2Component,
    SaludoComponent,
    GritoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
