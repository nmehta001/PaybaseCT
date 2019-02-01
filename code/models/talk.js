const Mongoose = require('mongoose');

const Schema = Mongoose.Schema;

// Define schema
const TalkSchema = new Schema({
  id: String,
  name: String,
  description: String,
  speakers: {any: Schema.Types.Mixed},
  attendees: {any: Schema.Types.Mixed},
  talkTime: Number,
  talkDuration: Number,
  maxAttendees: Number,
});

// Declare model to mongoose
const Talk = Mongoose.model('Talk', TalkSchema);

// Declare model to node
module.exports = Mongoose.model('Talk');
