class Talk {
  constructor(data) {
    if (!data) {
      return;
    }

    this.id = data.id;
    this.name = data.name;
    this.description = data.description;
    this.speakers = data.speakers;
    this.attendees = data.attendees;
    this.talkTime = data.talkTime;
    this.talkDuration = data.talkDuration;
    this.maxAttendees = 30;
  }
}
