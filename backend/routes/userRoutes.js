const express = require('express')
const auth = require('../controllers/authController')
const { getAllProjects, getSpecificProject,createProject } = require('../controllers/projectController')
const { getUsers, loginUser, addUser, deleteUser } = require('../controllers/usersController')
const router =  express.Router()


router.route("/users").get(getUsers)
router.route("/login").post(loginUser)
router.route("/register").post(addUser)


router.route("/admin/projects").get(auth,getAllProjects)
router.route("/admin/projects").post(auth,createProject)
router.route("/admin/users").delete(deleteUser)



module.exports = router