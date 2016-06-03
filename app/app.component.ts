import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS }
  from '@angular/router-deprecated';

import { DestinationDetailComponent } from './destination-detail.component';
import { GroupDetailComponent } from './group-detail.component';
import { GroupsComponent } from './groups.component';
import { HomeComponent } from './home.component';
import { ItineraryComponent } from './itinerary.component';
import { RatingsComponent } from './ratings.component';
import { DestinationService } from './destination.service';
import { GroupService } from './group.service';
import { RatingService } from './rating.service';
import { VenueService } from './venue.service';

@Component({
  directives: [ROUTER_DIRECTIVES],

  providers: [
    ROUTER_PROVIDERS,
    DestinationService,
    GroupService,
    RatingService,
    VenueService
  ],

  selector: 'my-app',

  styleUrls: ['app/app.component.css'],

  template: `
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['Home']">Home</a>
      <a [routerLink]="['Groups']">Groups</a>
      <a [routerLink]="['Itinerary']">Itinerary</a>
      <a [routerLink]="['Ratings']">Ratings</a>
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
  },
  {
    path: '/itinerary',
    name: 'Itinerary',
    component: ItineraryComponent
  },
  {
    path: '/ratings',
    name: 'Ratings',
    component: RatingsComponent
  }
])

export class AppComponent {
  title = 'Knowhere';
}
