require('dotenv').config()
const nodemailer = require('nodemailer')


const transporter = nodemailer.createTransport(
    {
        service: 'gmail',
        host: 'smtp.gmail.com',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASS
        },
        maxConnections: 10,
    }
)

// console.log(transporter);
const verifySmtp = ()=> {
	// verify connection configuration
	transporter.verify((error, success) =>{
		if (error) {
			console.log(error.message);
		} else {
			console.log("Server is ready for emails");
		}
	});
}

verifySmtp()

const sendMail = async(message)=>{
    // const transporter = createTransporter(defaultConfig);
    try {
        await transporter.verify();
        await transporter.sendMail(message);
        console.log('email sent');
        
    } catch (error) {
        
        console.log({
            error: error.message
        });
    }
}

module.exports = sendMail
