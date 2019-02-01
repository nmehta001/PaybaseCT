const Mongoose = require('mongoose');

const Schema = Mongoose.Schema;

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

const Talk = Mongoose.model('Talk', TalkSchema);

module.exports = Mongoose.model('Talk');
