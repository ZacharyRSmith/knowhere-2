export class Rating {
  id: number;
  venue_id: number;
  rating: number;

  constructor({ id, venue_id, rating=5 }) {
    this.id = id;
    this.venue_id = venue_id;
    this.rating = rating;
  }
}
