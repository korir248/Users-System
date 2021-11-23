require('dotenv').config()
const express = require('express')
const {auth} = require('./controllers/authController')
const { getUsers, addUser, loginUser } = require('./controllers/usersController')
const PORT = process.env.PORT
const cors = require('cors')

const app = express()
app.use(express.json(),cors())



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

    const {username,fullname, email,password} = req.body
    try {
        addUser(username,fullname,email,password).then((result,err)=>{
            if (err) {
                res.send(err.message)
                throw err
            }
            res.status(201).send("User Added Successfully!")
        })
    } catch (error) {
        res.send(error)
        console.log(error.message);
        
    }
})

app.post("/login",auth,(req,res)=>{
    const {username,password} = req.body
    console.log("Logging in");
    try {
        loginUser(username,password).then((result,error)=>{
            if(error){
                res.send(error)
                return error
            }
        })
    } catch (error) {
        console.log(error.message);
        
    }
})

app.listen(PORT, ()=>{
    console.log(`App running on port ${PORT}`);
})