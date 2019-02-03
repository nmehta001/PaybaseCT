const Mongoose = require('mongoose');

// Define schema
const SpeakerSchema = new Mongoose.Schema({
  _id: {type: Number},
  name: {type: String},
  bio: {type: String},
  image: {type: String},
});

// Declare model to mongoose
const Speaker = Mongoose.model('Speaker', SpeakerSchema, 'Speakers');

// Export model to node
module.exports = Speaker;
