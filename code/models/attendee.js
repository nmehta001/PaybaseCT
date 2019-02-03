const Mongoose = require('mongoose');
const Talk = require('./talk').schema;

// Define schema
const AttendeeSchema = new Mongoose.Schema({
  _id: {type: Number},
  name: {type: String},
  isGeneralAttendee: {type: Boolean},
  rsvp: {type: [Number]},
});

// Declare model to mongoose
const Attendee = Mongoose.model('Attendee', AttendeeSchema, 'Attendees');

// Export model to use in node
module.exports = Attendee;
