const Talk = require('../controllers/talks');
const Tape = require('tape');

Tape('Find all talks', (t) => {
  const talks = Talk.findTalks();
  console.log(talks);
  t.end();
});
