const Db = require('../db/db');
const Talk = require('../controllers/talks');
const Tape = require('tape');

Tape('Find all talks', (t) => {
  Db.connect();
  const talks = Talk.findTalks();
  t.notEqual(talks, null);
  t.end();
});

Tape('Find item by id and update the name', (t) => {
  Db.connect();
  const originalTalk = Talk.findTalk(0);
  const updatedObject = {
    $set: {
      name: "Machine Learning with CSS",
    },
  };
  const updatedTalk = Talk.updateSelectedTalk(1, updatedObject);

  t.notEqual(originalTalk, updatedTalk);
  t.end();
});

Tape(`Map speakers to their id on the Talks model`, (t) => {
  Db.connect();
  Talk.joinSpeakers();
  t.end();
});
