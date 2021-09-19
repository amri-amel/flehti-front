import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatMenuModule} from '@angular/material/menu';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayaoutModule } from './layaout/layaout.module';
@NgModule({
  declarations: [
    AppComponent,



  ],
  imports: [MatMenuModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayaoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
