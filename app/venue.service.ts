import { Injectable } from '@angular/core';

import { VENUES } from './mock-venues';

@Injectable()
export class VenueService {
  getVenues() {
    return Promise.resolve(VENUES);
  }
}
