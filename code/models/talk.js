const Mongoose = require('mongoose');

const TalkSchema = new Mongoose.Schema({
  id: String,
  name: String,
  description: String,
  speakers: [{type: String}],
  attendees: [{type: String}],
  talkTime: Number,
  talkDuration: Number,
  maxAttendees: Number,
});

const Talk = Mongoose.model('Talk', TalkSchema);

module.exports = Mongoose.model('Talk');
