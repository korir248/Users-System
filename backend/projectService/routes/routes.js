const express = require('express')
const auth = require('../controllers/authController')
const { getAllProjects, getSpecificProject,createProject, deleteProject } = require('../controllers/projectController')
const { getAllTasks, deleteTask, createTask, completeTask, getSingleTask, assignTask} = require('../controllers/taskController')
const router =  express.Router()

// Project routes
router.route("/admin/projects").get(auth,getAllProjects)
router.route("/admin/projects").post(auth,createProject)
router.route("/admin/projects").delete(auth,deleteProject)
router.route("/admin/projects/:id").get(auth,getSpecificProject)

// Task routes
router.route("/admin/tasks").get(auth,getAllTasks)
router.route("/admin/tasks").delete(auth,deleteTask)
router.route("/admin/tasks").post(auth,createTask)
router.route("/admin/tasks").post(auth,completeTask)
router.route("/admin/tasks/:id").get(auth,getSingleTask)
router.route("/admin/tasks/:id").post(auth,assignTask)


module.exports = router