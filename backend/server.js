require('dotenv').config()
const express = require('express')
const { getUsers, addUser } = require('./controllers/usersController')
const PORT = process.env.PORT

const app = express()
app.use(express.json())

app.get("/",(req,res)=>{
    res.status(200).send("Welcome Home")
    console.log('welcome home');
})

app.get("/users",(req,res)=>{
    try {
        getUsers().then((result,error)=>{
            if (error) {
                return error.message
                
            }
            console.log(result);
            return res.send(result)
        })
        
    } catch (error) {
        console.log(error.message);
    }
})

app.post("/register",(req,res)=>{

    const {username,email,password} = req.body
    try {
        addUser(username,email,password).then((result,err)=>{
            if (err) {
                return err.message                
            }
            return result
        })
    } catch (error) {
        console.log(error.message);
        
    }
})

app.listen(PORT, ()=>{
    console.log(`App running on port ${PORT}`);
})