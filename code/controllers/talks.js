const Talk = require('../models/talk');
const Speaker = require('../models/speaker');

const findTalks = async () => {
  const talks = await Talk.find({});
  console.log(talks);
};

const findTalk = async id => Talk.findById(id);

const updateSelectedTalk = async (id, updatedObject) => {
  Talk.findByIdAndUpdate(id, updatedObject, (err, talk) => {
    if (err) throw err;
    console.log(talk);
  });
};

const joinSpeakers = async () => {
  const talks = await Talk.find({});
  const joined = talks.map(talk => talk.speakers.map(speaker => Speaker.findById(speaker)));
  console.log(joined);
};

module.exports = {
  findTalks,
  findTalk,
  updateSelectedTalk,
  joinSpeakers,
};
