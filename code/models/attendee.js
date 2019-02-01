const Mongoose = require('mongoose');

const AttendeeSchema = new Mongoose.Schema({
  id: String,
  name: String,
  registered: Boolean,
  rsvp: [String],
});

const Attendee = Mongoose.model('Attendee', AttendeeSchema);

module.exports = Mongoose.model('Attendee');
