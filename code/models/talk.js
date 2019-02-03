const Mongoose = require('mongoose');

const Schema = Mongoose.Schema;

// Define schema
const TalkSchema = new Schema({
  _id: {type: Number},
  name: {type: String},
  description: {type: String},
  speakers: {any: Schema.Types.Mixed},
  attendees: {any: Schema.Types.Mixed},
  talkTime: {type: Number},
  talkDuration: {type: Number},
  maxAttendees: {type: Number},
});

// Declare model to mongoose
const Talk = Mongoose.model('Talk', TalkSchema, 'Talks');

// Declare model to node
module.exports = Talk;
