const Mongoose = require('mongoose');

const Schema = Mongoose.Schema;

// Define schema
const AttendeeSchema = new Schema({
  _id: {type: Number},
  name: {type: String},
  isGeneralAttendee: {type: Boolean},
  rsvp: {type: [Number]},
});

// Declare model to mongoose
const Attendee = Mongoose.model('Attendee', AttendeeSchema, 'Attendees');

// Export model to use in node
module.exports = Attendee;
