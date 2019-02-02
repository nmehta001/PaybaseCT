const Talk = require('../models/talk');

const findTalks = async (ctx) => {
  const talks = await Talk.find({});
  if (!talks || talks === null) {
    throw new Error("Talk documents not found");
  } else {
    ctx.body = talks;
  }
};

const updateSelectedTalk = async (ctx, index, updatedObject) => {
  Talk.findByIdAndUpdate(index, updatedObject, (err, talk) => {
    if (err) throw err;
    console.log(talk);
  });
};

module.exports = {
  findTalks,
  updateSelectedTalk,
};
