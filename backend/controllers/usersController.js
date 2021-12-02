const mssql = require('mssql')
const config = require('../config/db.config')
const generateToken = require('../helpers/token')


const getUsers = async(req,res)=>{
    try {
        let pool = await mssql.connect(config) 
        let users = pool.request().execute('spGetUsers',(err,result)=>{
            if(err) return res.status(401).send({
                error: err.message
            })
            return res.status(200).send(result.recordset)
            
        })

        return users
    } catch (error) {
        console.log(error.message);
        return res.status(500).send({
            error: error.message
        })
        
    }
    
}

const loginUser = async(req,res)=>{

    const { username,password} = req.body
    try{
        let pool = await mssql.connect(config)
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
        return res.status(500).send({
            error: error.message
        })
    }
}

const addUser = async(req,res)=>{
    const {username,fullname, email,password,cpassword} = req.body

    if(cpassword !== password) return res.status(401).send({
        error: "Confirm that both passwords match!"
    })
    try {
        let pool = await mssql.connect(config)
        const users = pool.request().execute('spGetUsers',(err,result)=>{
            if(err) return res.status(401).send("An error occured")
            let user = result.recordset.find(user=>{
                user.email === email || user.username === username
            })
            if(user) return res.status(401).send("Email or Username is already taken")    
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
        return res.status(500).send({
            error: error.message
        })
        
    }
}

const deleteUser = async(req,res)=>{
    const { email} = req.body
    try {

        let pool = await mssql.connect(config)
        let result = pool.request().input("email",`${email}`).execute('spDeleteUser',(err,result)=>{
            if(err) return res.status(500).send(err.message)
            return res.status(200).send({
                message: "Deleted successfully!",
                data: result.recordset
            })

        })

        return result
        
    } catch (error) {
        res.status(500).send({
            error: error.message
        })
        
    }

}

const getSpecificUser = async(req,res)=>{
    const { id } = req.params
    try {
        let pool= await mssql.connect(config)
        let user= pool.request().input("id",`${id}`).execute('spGetSpecificUser',(err,result)=>{
            if(err) return res.status(401).send({
                error: err.message
            })
            return res.status(202).send({
                message: "Fetched successfully!! ",
                user: result.recordset[0]
            })

        })
        return user
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            error: error.message
        })
        
    }
}

module.exports = { getUsers,addUser,loginUser, deleteUser,getSpecificUser}
