const Attendee = require('../models/attendee');
const Talk = require('./talks');

const updateSelectedAttendee = async (id, updatedObject) => {
  await Attendee.findByIdAndUpdate(id, updatedObject, (err, attendee) => {
    if (err) throw err;
    console.log(attendee);
  });
};

const registerAsGeneralAttendee = async (attendeeId) => {
  const updateObject = {
    $set: {
      isGeneralAttendee: !this.isGeneralAttendee,
    },
  };
  await updateSelectedAttendee(attendeeId, updateObject);
};

const registerForEvent = async (attendeeId, eventId) => {
  const canRegister = await Talk.canRegister(eventId);

  const eventUpdateObject = {
    $push: {
      attendees: attendeeId,
    },
  };

  const attendeeUpdateObject = {
    $push: {
      rsvp: eventId,
    },
  };

  if (canRegister) {
    await Talk.updateSelectedTalk(eventId, eventUpdateObject);
    await updateSelectedAttendee(attendeeId, attendeeUpdateObject);
    return true;
  }

  return false;
};

module.exports = {
  updateSelectedAttendee,
  registerAsGeneralAttendee,
  registerForEvent,
};
