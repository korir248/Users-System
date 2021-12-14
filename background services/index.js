require('dotenv').config()
const express = require('express')
const PORT = process.env.PORT
const cron = require('node-cron')

const app = express()

const run = async()=>{
    cron.schedule(' * * * * * *',async()=>{
        console.log('1');
    })
}
run()
app.listen(PORT,()=>{
    console.log(`App running on port ${PORT}`);
})