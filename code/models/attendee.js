class Attendee {
  constructor(data) {
    if (!data) {
      return;
    }

    this.id = data.id;
    this.name = data.name;
    this.registered = data.registered;
    this.rsvp = data.rsvp;
  }
}
