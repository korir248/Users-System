require('dotenv').config()
const express = require('express')
const cron = require('node-cron')
const sendEmail = require('./controllers/mailController')
const onRegister = require('./helpers/register')

const app = express()

const run = async()=>{
    cron.schedule(' */15 * * * * *',async()=>{
        console.log(1);
        
        await onRegister()
        await onTaskAssign()
        
    })
}
run()
app.listen(process.env.PORT,()=>{
    console.log(`App running on port ${process.env.PORT}`);
})