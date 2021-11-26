require('dotenv').config()
const nodemailer = require('nodemailer')


const transporter = nodemailer.createTransport(
    {
        service: "gmail",
        secure: false,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASS
        }
    }
)


const sendMail = async(message)=>{
    return new Promise((resolve,reject)=>{
        transporter.sendMail(message,(err,info)=>{
            if(err) reject(err)
            console.log(info);
            resolve(info)
        })
    })
}

module.exports = sendMail
