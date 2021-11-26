require('dotenv').config()
const express = require('express')
const PORT = process.env.PORT
const mailRouter = require('./routes/routes')

const app = express()

app.use(express.json())

app.use("/",mailRouter)


app.listen(PORT,()=>{
    console.log(`App running on port ${PORT}`);
})