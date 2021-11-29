const mssql = require('mssql')
const config = require('../config/db.config')

const getAllProjects = async(req,res)=>{
    try {
        let pool = await mssql.connect(config)
        let sql = "select id,project_name,date_created from projects"

        let projects = await pool.request().query(sql)
        const p = projects.recordset.map(project=>{
            return {
                project_id: project.id,
                project_name: project.projectname.trim(),
                date_created: project.date_created
             }
        })
        return p
        
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
        
    }
}

const getSpecificProject = async(req,res)=>{
    const {id} = req.params
    try {
        let pool = await mssql.connect(config)
        let sql = `select id,project_name, date_created from projects where id = ${id}`

        let project = pool.request().query(sql,(err,result)=>{
            if(err) return res.status(401).send({
                error: err.message
            })
            return res.status(202).send({
                message: "Fetched successfully!! ",
                project: result.recordset[0]

        })
        
    })} catch (error) {
        res.status(500).send({
            message: error.message
        })
    }

    module.exports = { getAllProjects,getSpecificProject}
}