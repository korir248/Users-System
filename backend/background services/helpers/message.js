require('dotenv').config()
const content = require('./icalContent')

const messageObj = {
    from: {
        name: 'Eugene Korir',
        address: process.env.EMAIL

    },
    to: 'eugene.korir@thejitu.com',
    subject: "Sending Calender Invite",
    cc: [
        process.env.EMAIL,
        ""
    ],
    html: 
    `<div>
        <h1>Invite to you:</h1>
        <p>welcome to an awesome meet-up</p>
        <p>Tell a friend to tell a friend</p>
        <button style="background-color:pink">Confirm attendance</button>
    </div>  `,

    icalEvent: {
        filename: 'invitation.ics',
        method: 'request',
        content: content
    }

}

module.exports = messageObj