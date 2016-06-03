import { Injectable } from '@angular/core';

import { Rating } from './rating';
import { RATINGS } from './mock-ratings';
import { Venue } from './venue';

@Injectable()
export class RatingService {
  add(venue: Venue) {
    return Promise.resolve(RATINGS)
      .then((rs: Rating[]) => {
        let id = rs.slice(-1)[0].id;
        let newRating = new Rating({ id, venue_id: venue.id });
        rs.push(newRating);
      });
  }

  getRatings(venue: Venue) {
    return Promise.resolve(RATINGS)
      // FIXME
      // .then((rs: Rating[]) => rs.filter(r => r.venue_id === venue.id));
  }
}
