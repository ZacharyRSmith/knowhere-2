import { Component, OnInit } from '@angular/core';

import { Rating } from './rating';
import { Venue } from './venue';
import { RatingService } from './rating.service';

@Component({
  moduleId: module.id,
  selector: 'itinerary',
  templateUrl: 'itinerary.component.html'
})
export class ItineraryComponent implements OnInit {
  fullItinerary: Rating[];
  hotels: Venue[];
  restaurants: Venue[];
  attractions: Venue[];

  constructor(
    private ratingService: RatingService) { }

  ngOnInit() {
    this.ratingService.getRatings()
      .then((rs: Rating[]) => {
        this.fullItinerary = rs;

        // TODO
        // rs.forEach(r => {
        //   switch (r.venue.venue_type_id) {
        //     case 1:
        //       this.hotels.push(r);
        //       break;
        //     case 2:
        //       this.restaurants.push(r);
        //       break;
        //     case 3:
        //       this.attractions.push(r);
        //   }
        // });
      });
  }

  // del(venue: Venue) {
  //   this.ratingService.del(venue);
  // }
}
