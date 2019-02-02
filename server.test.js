const test = require('tape');
const Mongoose = require('mongoose');
const config = require('./env') [process.env.NODE_ENV || 'development'];

test('Connect to the db with the uri from the config', (t) => {
  const connection = Mongoose.connect(config.MONGO_URI);
  t.notEqual(connection, null);
  t.end();
});

