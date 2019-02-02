const Db = require('../db/db');
const Talk = require('../controllers/talks');
const Tape = require('tape');

Tape('Find all talks', (t) => {
  Db.connect();
  const talks = Talk.findTalks();
  t.end();
});
