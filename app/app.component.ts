import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS }
  from '@angular/router-deprecated';

import { HomeComponent } from './home.component';

@Component({
  directives: [ROUTER_DIRECTIVES],

  providers: [
    ROUTER_PROVIDERS
  ],

  selector: 'my-app',

  styleUrls: ['app/app.component.css'],

  template: `
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['Home']">Home</a>
    </nav>
    <router-outlet></router-outlet>
  `
})

@RouteConfig([
  {
    path: '/',
    name: 'Home',
    component: HomeComponent,
    useAsDefault: true
  }
])

export class AppComponent {
  title = 'Knowhere';
}
