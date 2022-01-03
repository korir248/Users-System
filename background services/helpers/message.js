require('dotenv').config()

const messageObj = {
    from: {
        name: 'User System',
        address: process.env.EMAIL,
    },
    to: "",
    subject: `You have been assigned the project `,
    html: `<div>
    <h4 style="text-align: center, font-weight: bold;">You have been tasked with </h4>
    <p style="text-align: center; color: grey"></p>
    <p style="text-align: center; color: grey">Please start working on this task as soon as you receive this email</p>
    <p style="text-align: center; color:grey;">Any questions can be asked via the email </p>
</div>`,
}

module.exports = messageObj