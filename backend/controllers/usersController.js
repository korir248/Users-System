const mssql = require('mssql')
const config = require('../config/db.config')
const generateToken = require('../helpers/token')


const getUsers = async(req,res)=>{
    try {
        let pool = await mssql.connect(config)
        let sql = "select id,username,email,password from users where isDeleted = 0" 
        let users = pool.request().query(sql,(err,result)=>{
            if(err) return res.status(401).send({
                error: err.message
            })
            return res.status(200).send(result.recordset)
            
        })

        return users
    } catch (error) {
        console.log(error.message);
        
    }
    
}

const loginUser = async(req,res)=>{

    const { username,password} = req.body
    try{
        let pool = await mssql.connect(config)
        // let sql = `select username,password,isAdmin from users where isDeleted = 0 and username= '${username}'`
        let users = pool.request().input("username",`${username}`).execute('spLoginUser',(err,result)=>{
            if(err){
                console.log(err.message);
                return err.message
            }
            if(result.recordset.length === 0){
                console.log(`User ${username} does not exist`)
                return res.status(403).send({message: `User ${username} does not exist`})
            }else{
                if(result.recordset[0].password !== password){
                    console.log("Wrong password. Please try again!");
                    return res.status(403).send({message: "Wrong password. Please try again!"})
                }
                let token = generateToken(username,password)
                
                console.log("Login was successful");
                return res.status(202).send({
                    message: "Login was successful",
                    user: result.recordset[0],
                    token: token
                })
            }
        })
        return users
    }catch(err){
        return res.status(401).send(err.message)
    }
}

const addUser = async(req,res)=>{
    const {username,fullname, email,password,cpassword} = req.body

    if(cpassword !== password) return res.status(401).send({
        error: "Confirm that both passwords match!"
    })
    try {
        let pool = await mssql.connect(config)
        // let sql2 = "select * from users where isDeleted = 0"
        const users = pool.request().execute('spGetUsers',(err,result)=>{
            if(err) return res.status(401).send("An error occured")
            let user = result.recordset.find(user=>{
                user.email === email || user.username === username
            })
            if(user) return res.status(401).send("Email or Username is already taken")
            // let sql = `insert into dbo.users([fullname],[username],[email],[password])values('${fullname}','${username}','${email}','${password}');`
    
            let resquery= pool.request().input("fullname",`${fullname}`).input("username",`${username}`).input("email",`${email}`).input("password",`${password}`).execute('spAddUser',(err,result)=>{
                if (err) return res.status(401).send(err.message)
                return res.status(200).send({
                    message: "Signup was successful",
                    data: result.recordset
                })
            })
            return resquery
        })        
        return users
    } catch (error) {
        console.log("error: ",error.message);
        
    }
}

const deleteUser = async(req,res)=>{
    const { email} = req.body
    try {

        let pool = await mssql.connect(config)
        let sql = `update users set isDeleted = 1 where email = '${email}'`

        let result = pool.request().query(sql).then((err,result)=>{
            if(err) return res.send(err.message)
            res.status(202).send("Deleting...!")
            return res.status(200).send({
                message: "Deleted successfully!",
                data: result.recordset
            })

        })

        return result
        
    } catch (error) {
        res.send({
            error: error.message
        })
        
    }

}

const getSpecificUser = async(req,res)=>{
    const { id } = req.params
    try {
        let pool= await mssql.connect(config)
        let sql = `select id,username,email from users where id = ${id}`
        let user= pool.request().query(sql).then((result,err)=>{
            if(err) return res.status(401).send({
                error: err.message
            })
            return res.status(202).send({
                message: "Fetched successfully!! ",
                user: result.recordset[0]
            })

        }).catch(err=>{
            return res.send({
                error: err.message,
                message: "An error occured!"
            })
        })
        return user
    } catch (error) {
        console.log(error)
        
    }
}

module.exports = { getUsers,addUser,loginUser, deleteUser,getSpecificUser}
