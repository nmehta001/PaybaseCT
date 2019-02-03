const Mongoose = require('mongoose');
const Speaker = require('./speaker').schema;

const Schema = Mongoose.Schema;

// Define schema
const TalkSchema = new Schema({
  _id: {type: Number},
  name: {type: String},
  description: {type: String},
  speakers: {type: [Number]},
  attendees: {type: [Number]},
  talkTime: {type: Number},
  talkDuration: {type: Number},
  maxAttendees: {type: Number},
});

// Declare model to mongoose
const Talk = Mongoose.model('Talk', TalkSchema, 'Talks');

// Declare model to node
module.exports = Talk;
