export class Rating {
  id: number;
  venue_id: number;

  constructor({ id, venue_id }) {
    this.id = id;
    this.venue_id = venue_id;
  }
}
