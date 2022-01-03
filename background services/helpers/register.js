const axios = require('axios');
const sendMail = require('../mail/mail');

const onRegister = async()=>{

    const { data} = await axios.get('http://localhost:3001/email')
    // console.log(data);

    if(data.length){
        data.map(user=>{
            const messageObj = {
                from: {
                    name: 'User System',
                    address: process.env.EMAIL,
                },
                to: user.email,
                subject: `Welcome to User System`,
                html: `<div>
                <h4 style="text-align: center, font-weight: bold;">Hi ${user.fullname}</h4>
                <p style="text-align: center; color: grey"></p>
                <hr>
                <p style="text-align: center; color: grey">we would like to welcome you to User System.</p>
                <p style="text-align: center; color: grey">Thank you for registering!</p>
                <p style="text-align: center; color:grey;">If you have any questions send them to ${process.env.EMAIL}</p>
            </div>`,
            }

            sendMail(messageObj)
        })
    }

}

module.exports = onRegister