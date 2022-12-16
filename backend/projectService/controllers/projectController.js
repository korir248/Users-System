const mssql = require('mssql')
const config = require('../config/db.config')

const getAllProjects = async(req,res)=>{
    try {
        let pool = await mssql.connect(config)
        let projects = pool.request().execute('spGetProjects',(err,result)=>{
            if(err) return res.status(500).send({ error: err.message})

            const p = result.recordset.map(project=>{
                return {
                    id: project.project_id,
                    project_name: project.project_name.trim(),
                    date_created: project.date_created,
                    due_date: project.due_date,
                    isCompleted: project.isCompleted
                 }
            })
            console.log(p)
            return res.status(200).send(p)
        })
        return projects
        
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
        
    }
}

const getSpecificProject = async(req,res)=>{
    const {email} = req.body
    try {
        let pool = await mssql.connect(config)
        let project = pool.request().input("email",`${email}`).execute('spGetSpecificProject',(err,result)=>{
            if(err) return res.status(401).send({
                error: err.message
            })
            return res.status(202).send({
                message: "Fetched successfully!! ",
                project: result.recordset[0]

        })
        
    })
    return project

    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}

const deleteProject = async(req,res)=>{
    const {id} = req.headers
    try {
        let pool = await mssql.connect(config)
        let result =  pool.request().input('id',id).execute('spDeleteProject',(err,result)=>{
            if(err) return res.status(401).send({
                error: err.message,
                message: "An Error Occured!"                
            })
            console.log(result.recordset);
            return res.status(204).send(result.recordset)
        })
        return result
        
    } catch (error) {
        return res.status(500).send({
            error: error.message,
            message: "An Error Occured!"
        })
        
    }
}
const createProject = async(req,res)=>{
    const { project_name,date_created,due_date} = req.body
    try {
        let pool = await mssql.connect(config)    
        let project = pool.request().input("project_name",`${project_name}`).input("date_created",`${date_created}`).input('due_date',`${due_date}`).execute('spCreateProject',(err,result)=>{
            // console.log(err);
            if(err) {
                return res.status(401).send({
                message: "An error ocurred!",
                error: err.message
            })}
            console.log(result.recordset);
            return res.status(201).send({
                message: "Project added successfully!",
                project: result.recordset
            })
        }) 
        return project  
    } catch (error) {
        return res.status(500).send({
            error: error.message,
            message: "An Error Occured!"
        })        
    }
}
const undo = async(req,res)=>{
    try {
        let pool  = await mssql.connect(config)
        pool.request().execute('spUndo',(err,result)=>{
            if(err) return res.status(500).send(err.message)
        })
    } catch (error) {
        
    }
}

module.exports = { getAllProjects,getSpecificProject,deleteProject,createProject,undo}