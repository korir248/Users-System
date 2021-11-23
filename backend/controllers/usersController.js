const mssql = require('mssql')
const config = require('../config/db.config')


const getUsers = async(req,res)=>{
    try {
        let pool = await mssql.connect(config)
        let sql = "select id,username,email from users where isDeleted = 0" 
        let users = await pool.request().query(sql)
        const u = users.recordset.map(user=>{
            return {
                user_id: user.id,
                username: user.username.trim(),
                email: user.email.trim()    
             }
        })
        return res.send(u)

    } catch (error) {
        console.log(error.message);
        
    }
    
}

const loginUser = async(username,password)=>{
    try{
        let pool = await mssql.connect(config)
        let sql = "select username,password from users where isDeleted = 0 "
        let user = await pool.request().query(sql)
        console.log(user)

        const userLogin = user.recordset.find(user=>{
            user.username === username
        })
        if(!userLogin) "No such user was found"

        if(!(userLogin.password === password)) "Wrong Password"


        return user
    }catch(err){
        return err.message;
    }
}

const addUser = async(username,fullname, email,password)=>{

    try {
        let pool = await mssql.connect(config)
        let sql2 = "select * from users where isDeleted = 0"
        const users = await pool.request().query(sql2)

        const user = users.recordset.find(user=>{
            user.email === email || user.username === username
        })

        if(!user) "Email or Username is already taken"

        let sql = `insert into users(username,fullname,email,password) values(${username},${fullname},${email},${password})`

        await pool.request().query(sql,(err,result)=>{
            if (err) {
                return err.message
                
            }
            return result
        })
        // let result = await pool.request().query(sql,(err,result)=>{
        //     if (err) {
        //         return err.message
                
        //     }
        //     return result
        // })
        // return result
    } catch (error) {
        console.log(error.message);
        
    }
}

module.exports = { getUsers,addUser,loginUser}
