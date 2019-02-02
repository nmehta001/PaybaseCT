const Db = require('../db/db');
const Mongoose = require('mongoose');
const Talk = require('../controllers/talks');
const Tape = require('tape');

Tape('Find all talks', (t) => {
  Db.connect();
  Talk.findTalks();
  t.end();
});

Tape('Find item by id and update the name', (t) => {
  Db.connect();

  // const index = Mongoose.Types.ObjectId();

  const updatedObject = {
    $set: {
      name: "Machine Learning with Lisp",
    },
  };

  Talk.updateSelectedTalk("0", updatedObject);
  t.end();
});
