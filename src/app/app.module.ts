import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { MembertableComponent } from './membertable.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, MembertableComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
