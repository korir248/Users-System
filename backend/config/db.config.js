require('dotenv').config()
const mssql = require('mssql')

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  server: 'localhost',
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: true,
    trustServerCertificate: true 
  }
}

mssql.connect(config).then(pool =>{

  if(pool.connecting){
      console.log('Connecting to the database')
  }

  if(pool.connected){     
      console.log("Connected")
  }
}).catch(e=>{
    console.log(e.message)
  })



module.exports = config