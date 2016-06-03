import { Component, OnInit } from '@angular/core';

import { Rating } from './rating';
import { RatingService } from './rating.service';

@Component({
  moduleId: module.id,
  selector: 'ratings',
  templateUrl: 'ratings.component.html'
})
export class RatingsComponent implements OnInit {

  ratings: Rating[];

  constructor(private ratingService: RatingService) { }

  ngOnInit() {
    this.ratingService.getRatings()
      .then((rs: Rating[]) => this.ratings = rs);
  }
}