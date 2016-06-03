import { Component, OnInit } from '@angular/core';

import { Rating } from './rating';
import { RatingService } from './rating.service';

@Component({
  moduleId: module.id,
  selector: 'itinerary',
  templateUrl: 'itinerary.component.html'
})
export class ItineraryComponent implements OnInit {
  fullItinerary: Rating[];

  constructor(
    private ratingService: RatingService) { }

  ngOnInit() {
    this.ratingService.getRatings()
      .then((rs: Rating[]) => this.fullItinerary = rs);
  }
}