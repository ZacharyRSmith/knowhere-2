import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS }
  from '@angular/router-deprecated';

import { DestinationDetailComponent } from './destination-detail.component';
import { GroupDetailComponent } from './group-detail.component';
import { GroupsComponent } from './groups.component';
import { HomeComponent } from './home.component';
import { DestinationService } from './destination.service';
import { GroupService } from './group.service';

@Component({
  directives: [ROUTER_DIRECTIVES],

  providers: [
    ROUTER_PROVIDERS,
    DestinationService,
    GroupService
  ],

  selector: 'my-app',

  styleUrls: ['app/app.component.css'],

  template: `
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['Home']">Home</a>
      <a [routerLink]="['Groups']">Groups</a>
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
  },
  {
    path: '/destination-detail',
    name: 'DestinationDetail',
    component: DestinationDetailComponent
  },
  {
    path: '/group-detail',
    name: 'GroupDetail',
    component: GroupDetailComponent
  },
  {
    path: '/groups',
    name: 'Groups',
    component: GroupsComponent
  }
])

export class AppComponent {
  title = 'Knowhere';
}
