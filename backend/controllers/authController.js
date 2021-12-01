require('dotenv').config()
const jwt = require('jsonwebtoken')

const auth = async(req, res, next)=>{
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1] || null;
      
        if(token === null) return res.status(401).send({
          error: "Error. Token not provided!"
        })        
        jwt.verify(token, process.env.SECRET, (err, user) => {
          if(err) return res.status(403).send({
            error: "Invalid token!"
          })
          next();
        });      

}

module.exports = auth