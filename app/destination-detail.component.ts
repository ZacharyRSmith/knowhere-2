import { Component, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';

import { Destination } from './destination';
import { DestinationService } from './destination.service';

@Component({
  moduleId: module.id,
  selector: 'destination-detail',
  templateUrl: 'destination-detail.component.html'
})
export class DestinationDetailComponent implements OnInit {

  destination: Destination;

  constructor(
    private destinationService: DestinationService,
    private routeParams: RouteParams) { }

  ngOnInit() {
    let id = +this.routeParams.get('id');

    this.destinationService.getDestination(id)
      .then((d: Destination) => this.destination = d);
  }
}