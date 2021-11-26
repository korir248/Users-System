const ical = require('ical-generator');
const moment = require('moment');

const content = ical({
  domain: 'google.com',
  method: 'REQUEST',
  prodId: '//Google Inc//Google Calendar 70.9054//EN',
  events: [
    {
      start: moment(),
      status: 'CONFIRMED',
      end: moment().add(10, 'hour'),
      summary: 'Rotaract Meeting',
      transparency: 'OPAQUE',
      organizer: {
        name: 'Eugene Korir',
        email: process.env.EMAIL,
        mailto: 'eugenekorir1@gmail.com',
      },
      location: 'Nairobi',
      attendees:[
        {
          email: 'annbel@gmail.com',
          name: 'Annbel',
          status: 'NEEDS-ACTION',
          type: 'INDIVIDUAL',
          role: 'REQ-PARTICIPANT',
        },
        {
          email: 'mike@gmail.com',
          name: 'Mike',
          status: 'NEEDS-ACTION',
          type: 'INDIVIDUAL',
          role: 'REQ-PARTICIPANT',
        },
      ],
    },
  ],
}).toString();
module.exports = content;