const Mongoose = require('mongoose');

const SpeakerSchema = new Mongoose.Schema({
  id: String,
  name: String,
  description: String,
  image: String,
});

const Speaker = Mongoose.model('Speaker', SpeakerSchema);

module.exports = Mongoose.model('Speaker');
