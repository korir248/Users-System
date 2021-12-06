require('dotenv').config()
const jwt = require('jsonwebtoken')
secret = process.env.SECRET

const generateToken = (username,password)=>{
    return jwt.sign({username,password},secret,{expiresIn: '1h'})

}

module.exports = generateToken