const mssql = require('mssql')
const config = require('../config/db.config')


const getUsers = async()=>{
    try {
        let pool = await mssql.connect(config)
        let sql = "select id,username,email from users where isDeleted = 0" 
        let users = await pool.request().query(sql)
        const u = users.recordset.map(user=>{
            return {
                user_id: user.id,
                username: user.username,
                email: user.email    
             }
        })
        return u

    } catch (error) {
        console.log(error.message);
        
    }
    
}

const addUser = async(username,email,password)=>{
    try {
        let pool = await mssql.connect(config)
        let sql = `insert into users(username,email,password) values(${username},${email},${password})`
        let result = await pool.request().query(sql,(err,result)=>{
            if (err) {
                return err.message
                
            }
            return result
        })
        return result
    } catch (error) {
        console.log(error.message);
        
    }
}

module.exports = { getUsers,addUser}
