const Talk = require('../models/talk');

const findTalks = async () => {
  const talks = await Talk.find({});
  console.log(talks);
};

const updateSelectedTalk = async (index, updatedObject) => {
  Talk.findByIdAndUpdate(index, updatedObject, (err, talk) => {
    if (err) throw err;
    console.log(talk);
  });
};

module.exports = {
  findTalks,
  updateSelectedTalk,
};
