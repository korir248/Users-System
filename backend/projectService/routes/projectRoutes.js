const express = require('express')
const auth = require('../controllers/authController')
const { getAllProjects, getSpecificProject,createProject, deleteProject } = require('../controllers/projectController')
const router =  express.Router()

router.route("/admin/projects").get(auth,getAllProjects)
router.route("/admin/projects").post(auth,createProject)
router.route("/admin/projects").delete(auth,deleteProject)



module.exports = router