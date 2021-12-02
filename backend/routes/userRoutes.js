const express = require('express')
const auth = require('../controllers/authController')
const { getAllProjects, getSpecificProject,createProject } = require('../controllers/projectController')
const { getUsers, loginUser, addUser } = require('../controllers/usersController')
const router =  express.Router()


router.route("/users").get(getUsers)
router.route("/login").post(loginUser)
router.route("/register").post(addUser)


router.route("/admin/projects").get(auth,getAllProjects)
router.route("/admin/projects").post(auth,createProject)



module.exports = router