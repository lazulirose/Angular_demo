import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MembertableComponent } from './membertable.component';
import { PollComponent } from './poll.component';

import { MembersService } from './members.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryMemberdataService } from './in-memory-memberdata.service';

import {HttpModule} from '@angular/http';

@NgModule({
  imports: [BrowserModule, AppRoutingModule,HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryMemberdataService)
  ],
  declarations: [AppComponent, MembertableComponent, PollComponent],
  bootstrap: [AppComponent],
  providers: [MembersService],
})

export class AppModule { }
