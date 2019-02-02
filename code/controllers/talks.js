const Talk = require('../models/talk');

Talk.find({}, (err, talks) => {
  if (err) throw err;
  console.log(talks);
});

// async function findAll(ctx) {
//   // Fetch all Talk’s from the database and return as payload
//   const talks = await Talk.find({});
//   ctx.body = talks;
// }

async function update(ctx) {
  // Find Talk based on id, then toggle done on/off
  const id = ctx.params.id;
  const talk = await Talk.findById(id);
  talk.attendees = ctx.params.attendees;

  const updatedAttendees = await talk.save();
  ctx.body = updatedAttendees;
}

// module.exports = {
//   find,
//   update,
// };
