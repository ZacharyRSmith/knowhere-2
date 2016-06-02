import { Injectable } from '@angular/core';

import { Destination } from './destination';
import { DESTINATIONS } from './mock-destinations';

@Injectable()
export class DestinationService {
  getDestination(id: number) {
    return Promise.resolve(DESTINATIONS)
      .then((ds: Destination[]) => ds.find(d => d.id === id));
  }
}
