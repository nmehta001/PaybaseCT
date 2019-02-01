const Mongoose = require('mongoose');

// Define schema
const AttendeeSchema = new Mongoose.Schema({
  id: String,
  name: String,
  registered: Boolean,
  rsvp: [String],
});

// Declare model to mongoose
const Attendee = Mongoose.model('Attendee', AttendeeSchema);

// Export model to use in node
module.exports = Mongoose.model('Attendee');
