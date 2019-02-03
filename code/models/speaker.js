const Mongoose = require('mongoose');

const Schema = Mongoose.Schema;

// Define schema
const SpeakerSchema = new Schema({
  _id: {type: Number},
  name: {type: String},
  bio: {type: String},
  image: {type: String},
});

// Declare model to mongoose
const Speaker = Mongoose.model('Speaker', SpeakerSchema, 'Speakers');

// Export model to node
module.exports = Speaker;
