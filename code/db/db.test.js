const test = require('tape');
const Db = require('./db');

test('Connect to the db with the uri from the config', (t) => {
  const connection = Db.connect();
  t.notEqual(connection, null);
  t.end();
});
