const mssql = require('mssql')
const config = require('../config/db.config')


const getAllTasks = async(req,res)=>{
    try {
        let pool = await mssql.connect(config)
        let tasks = pool.request().execute('spGetTasks',(err,result)=>{
            if(err) return res.status(401).send({
                message: "An error occured",
                error: err.message
            })
            // console.log(result.recordset)

            const t = result.recordset.map(task=>{
                return {
                    id: task.task_id,
                    task_name: task.task_name.trim(),
                    project_name: task.project_name,
                    project_id: task.project_id,
                    isAssigned: task.isAssigned,
                    isCompleted: task.isCompleted,
                    isSubmitted: task.isSubmitted,
                    email: task.email
                }
            })

            return res.status(200).send({
                message: "Fetched Successfully!",
                tasks: t
            })
        })

        return tasks

        
    } catch (error) {
        console.log(error.message);
        res.status(500).send({
            message: "An error occured!",
            error: error.message
        })
        
    }   
}

const deleteTask = async(req,res)=>{
    const {id} = req.headers
    console.log(req.headers.id);

    try {
        let pool = await mssql.connect(config)
        let result = pool.request().input('id',id).execute('spDeleteTask',(err,result)=>{
            if(err) return res.status(401).send({
                message: "An error occured",
                error: err.message
            })

            // console.log(result.recordset);
            return res.status(200).send({
                message: "Deleted successfully!",
                data: result.recordset
            })
        })

        return result
        
    } catch (error) {
        console.log(error.message);
        res.status(500).send({
            message: "An error occured!",
            error: error.message
        })
        
    }
}

const createTask = async(req,res)=>{

    const {task_name,id} = req.body
    try {
        let pool = await mssql.connect(config)
        let task = pool.request().input("task_name",`${task_name}`).input("id",id).execute('spCreateTasks',(err,result)=>{
            if(err) return res.status(401).send({
                error: err.message
            })

            return res.status(201).send({
                message: "Task created successfully!",
                task: result.recordset
            })
        })

        return task
        
    } catch (error) {
        console.log(error.message);
        res.status(500).send({
            message: "An error occured!",
            error: error.message
        })
    }
}

const completeTask = async(req,res)=>{
    const {id} = req.body
    try {
        let pool = await mssql.connect(config)
        let task = pool.request().input("id",id).execute('spCompleteTask',(err,result)=>{
            if(err) return res.status(401).send(err.message)
            return res.status(200).send(result.recordset)
        })
        return task
        
    } catch (error) {
        res.status(500).send({
            message: "An error occured!",
            error: error.message
        })
        
    }
}

const getSingleTask = async(req,res)=>{
    const {id} = req.body
    try {
        let pool = await mssql.connect(config)
        let task = pool.request().input("id",id).execute('spGetSingleTask',(err,result)=>{
            if(err) return res.status(400).send('errpr:',err.message)

            return res.status(200).send({
                message: "Fetched successfully!",
                task: result.recordset
            })
        })

        return task
        
    } catch (error) {
        res.status(500).send({
            message: "An error occured!",
            error: error.message
        })
        
    }

}

const assignTask = async(req,res)=>{
    // console.log(req.body);
    const { task_id,user_id} = req.body
    console.log(task_id,user_id);

    if(task_id === null || user_id === null) return res.status(403).send("Error!")
     
    try {
        let pool = await mssql.connect(config)
        let task = pool.request().input("task_id",task_id).input("user_id",user_id).execute('spAssignTask',(err,result)=>{
            if(err) return res.status(403).send({
                message: "An error occured!",
                error: err.message
            })
            return res.status(201).send({
                message: "Task has been assigned!",
                task: result.recordset
            })
        })
        return task
    } catch (error) {
        res.status(500).send({
            message: "An error occured!",
            error: error.message
        })
        
    }
}

const unAssignTask = async(req,res)=>{

    const { task_id } = req.body
    try {
        let pool = await mssql.connect(config)
        let task = pool.request().input("task_id",task_id).execute('spUnAssignTask',(err,result)=>{
            if(err) return res.status(401).send({
                message: "An error occured!",
                error: err.message
            })

            console.log(`Task ${task_id} unassigned`);
            return res.status(200).send("Task unassigned!")
        })
        return task
    } catch (error) {
        return res.status(500).send({
            message: "An eror occured!",
            error: error.message
        })
        
    }
}

const submitTask = async(req,res)=>{
    const { task_id } = req.body
    console.log(task_id);
    try {
        let pool = await mssql.connect(config)
        let task = pool.request().input("task_id",task_id).execute('spSubmitTask',(err)=>{
            if(err) return res.status(401).send({
                message: "An error occured!",
                error: error.message
            })
            return res.status(200).send("Task submitted!")
        })
        return task
    } catch (error) {
        return res.status(500).send({
            message: "An eror occured!",
            error: error.message
        })
        
    }

}

module.exports = { getAllTasks,deleteTask,createTask,completeTask, getSingleTask, assignTask, unAssignTask,submitTask}