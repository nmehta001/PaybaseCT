const Talk = require('../models/talk');

async function findAll(ctx) {
  // Fetch all Talk’s from the database and return as payload
  const todos = await Talk.find({});
  ctx.body = todos;
}

async function update(ctx) {
  // Find Talk based on id, then toggle done on/off
  const id = ctx.params.id;
  const talk = await Talk.findById(id);
  talk.attendees = ctx.params.attendees;

  const updatedAttendees = await talk.save();
  ctx.body = updatedAttendees;
}

module.exports = {
  findAll,
  update,
};
