const Tape = require('tape');
const Db = require('../db/db');
const Attendee = require('../controllers/attendees');

Tape('Register as a general attendee', (t) => {
  Db.connect();
  const registered = Attendee.registerAsGeneralAttendee(13);
  t.notEqual(registered, false);
  t.end();
});

Tape('Register for an event', (t) => {
  Db.connect();
  const registerForEvent = Attendee.registerForEvent(63, 4);
  t.notEqual(registerForEvent, false);
  t.end();
});

Tape('Find attendee by id and update their name', (t) => {
  Db.connect();
  const originalAttendee = Attendee.findAttendee(72);
  const updatedObject = {
    $set: {
      name: "Janet Bruce",
    },
  };
  const updatedAttendee = Attendee.updateSelectedAttendee(72, updatedObject);
  t.notEqual(originalAttendee, updatedAttendee);
  t.end();
});
