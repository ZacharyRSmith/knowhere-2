import { Injectable } from '@angular/core';

import { VENUES } from './mock-venues';

@Injectable()
export class VenueService {
  getVenues() {
    return Promise.resolve(VENUES);
  }

  // getVenueDetails(venueId: number) {
  //   return $http({
  //     method: 'GET',
  //     url: '/api/dest/venues/info',
  //     params: { venueId }
  //   })
  //     .then(function successCb (resp){
  //       return resp.data;
  //     }, function errCb (resp) {
  //       console.error(resp);
  //       return resp;
  //     });
  // }
}
