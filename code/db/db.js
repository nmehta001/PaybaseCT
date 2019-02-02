const assert = require('assert');
const Mongoose = require('mongoose');
const config = require('../../env')[process.env.NODE_ENV || 'development'];

const connect = () => {
  Mongoose.connect(config.MONGO_URI, (err, db) => {
    assert.equal(null, err);
    console.log("Successfully connected to the database");
    console.log(db);
  });
};

// TODO: Revisit this, it kills the connection before any queries can be made
const disconnect = () => {
  Mongoose.connection.close();
};

module.exports = {
  connect,
  disconnect,
};
