const Mongoose = require('mongoose');

// Define schema
const SpeakerSchema = new Mongoose.Schema({
  id: String,
  name: String,
  description: String,
  image: String,
});

// Declare model to mongoose
const Speaker = Mongoose.model('Speaker', SpeakerSchema);

// Export model to node
module.exports = Speaker;
