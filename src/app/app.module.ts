import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MembertableComponent } from './membertable.component';
import { PollComponent } from './poll.component';

import { MembersService } from './members.service';


@NgModule({
  imports: [BrowserModule,
    RouterModule.forRoot(
      [
        { path: '', redirectTo: '/membertable', pathMatch: 'full' },
        { path: 'membertable', component: MembertableComponent },
        { path: 'poll', component: PollComponent }
      ]
    )
  ],
  declarations: [AppComponent, MembertableComponent, PollComponent],
  bootstrap: [AppComponent],
  providers: [MembersService],
})

export class AppModule { }
