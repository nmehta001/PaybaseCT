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

Tape('', (t) => {
  Db.connect();
  t.notEqual()
  t.end();
});
