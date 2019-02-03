const Db = require('../db/db');
const Talk = require('../controllers/talks');
const Tape = require('tape');

Tape('Find all talks', (t) => {
  Db.connect();
  Talk.findTalks();
  t.end();
});


Tape('Find item by id and update the name', (t) => {
  Db.connect();
  const updatedObject = {
    $set: {
      name: "Machine Learning with Lisp",
    },
  };
  Talk.updateSelectedTalk(1, updatedObject);
  t.end();
});
