require('dotenv').config()
const express = require('express')
const PORT = process.env.PORT
const cron = require('cron')

const app = express()

app.listen(PORT,()=>{
    console.log(`App running on port ${PORT}`);
})