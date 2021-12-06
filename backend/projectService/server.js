require('dotenv').config()
const express = require('express')
const PORT = process.env.PORT
const cors = require('cors')
const router = require('./routes/projectRoutes')

const app = express()
app.use(express.json(),cors())

app.use("/",router)

app.listen(PORT, ()=>{
    console.log(`App running on port ${PORT}`);
})