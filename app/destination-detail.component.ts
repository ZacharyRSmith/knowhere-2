import { Component, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';

import { Destination } from './destination';
import { Venue } from './venue';
import { DestinationService } from './destination.service';
import { RatingService } from './rating.service';
import { VenueService } from './venue.service';

@Component({
  moduleId: module.id,
  selector: 'destination-detail',
  templateUrl: 'destination-detail.component.html'
})
export class DestinationDetailComponent implements OnInit {

  destination: Destination;
  venues: Venue[];

  constructor(
    private destinationService: DestinationService,
    private ratingService: RatingService,
    private routeParams: RouteParams,
    private venueService: VenueService) { }

  ngOnInit() {
    let id = +this.routeParams.get('id');

    this.destinationService.getDestination(id)
      .then((d: Destination) => this.destination = d);

    this.venueService.getVenues()
      .then((vs: Venue[]) => this.venues = vs);
  }

  addToRatings(venue: Venue) {
    this.ratingService.add(venue);
  }

  showMoreInfo(venue: Venue) {
    alert(JSON.stringify(venue));
  }
}