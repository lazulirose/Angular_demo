import { Component } from '@angular/core';
import { MembertableComponent } from './membertable.component';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
  <membertable></membertable>
  `,
})
export class AppComponent  { 
		name = '2017';
	}
