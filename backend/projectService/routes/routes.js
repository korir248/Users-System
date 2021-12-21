const express = require('express')
const auth = require('../controllers/authController')
const { getAllProjects, getSpecificProject,createProject, deleteProject, undo } = require('../controllers/projectController')
const { getAllTasks, deleteTask, createTask, completeTask, getSingleTask, assignTask, unAssignTask, submitTask} = require('../controllers/taskController')
const router =  express.Router()

// Project routes
router.route("/admin/projects").get(auth,getAllProjects)
router.route("/admin/projects").post(auth,createProject)
router.route("/admin/projects").delete(auth,deleteProject)
router.route("/admin/projects/:id").get(auth,getSpecificProject)
router.route("/admin/projects").put(auth,undo)

// Task routes
router.route("/admin/tasks").get(auth,getAllTasks)
router.route("/admin/tasks").delete(auth,deleteTask)
router.route("/admin/tasks").post(auth,createTask)
router.route("/admin/tasks/complete").put(auth,completeTask)
// router.route("/admin/tasks/:id").get(auth,getSingleTask)
router.route("/admin/tasks").put(auth,assignTask)
router.route("/admin/tasks/unassign").put(auth,unAssignTask)
router.route("/tasks/submit").put(auth,submitTask)


module.exports = router