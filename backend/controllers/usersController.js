const mssql = require('mssql')
const config = require('../config/db.config')


const getUsers = async()=>{
    try {
        let pool = await mssql.connect(config)
        let sql = "select id,username,email,password from users where isDeleted = 0" 
        let users = await pool.request().query(sql)
        const u = users.recordset.map(user=>{
            return {
                user_id: user.id,
                username: user.username.trim(),
                email: user.email.trim(),
                password:user.password.trim()
             }
        })
        return u
    } catch (error) {
        console.log(error.message);
        
    }
    
}

const loginUser = async(req,res)=>{

    const { username,password} = req.body
    try{
        let pool = await mssql.connect(config)
        let sql = `select username,password from users where isDeleted = 0 and username= '${username}'`
        let users = pool.request().query(sql,(err,result)=>{
            if(err){
                console.log(err.message);
                return err.message
            }
            if(result.recordset.length === 0){
                console.log(`User ${username} does not exist`)
                return res.status(401).send({message: `User ${username} does not exist`})
            }else{
                if(result.recordset[0].password !== password){
                    console.log("Wrong password. Please try again!");
                    return res.status(401).send("Wrong password. Please try again!")
                }
                console.log("Login was successful");
                return res.status(201).send(result.recordset[0])
            }
        })
        return users
    }catch(err){
        return res.send(err.message)
    }
}

const addUser = async(req,res)=>{
    const {username,fullname, email,password} = req.body

    try {
        let pool = await mssql.connect(config)
        let sql2 = "select * from users where isDeleted = 0"
        const users = await pool.request().query(sql2)

        const user = users.rdset.find(user=>{
            user.email === email || user.username === username
        })

        if(user || username) "Email or Username is already taken"

        let sql = `insert into dbo.users([fullname],[username],[email],[password])values('${fullname}','${username}','${email}','${password}');`

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
