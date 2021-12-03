require('dotenv').config()
const jwt = require('jsonwebtoken')

const auth = async(req, res, next)=>{

        const token =  req.headers['authorization']
        if(token === null) return res.status(401).send({
          error: "Error. Token not provided!"
        })
        try {
          jwt.verify(token, process.env.SECRET)
          
          next();
        } catch (error) {          
          return res.status(403).send({
            error: "Invalid token!"
          })
        }            

}

module.exports = auth