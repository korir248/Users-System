const express = require('express')
const { getAllProjects, getSpecificProject } = require('../controllers/projectController')
const { getUsers, loginUser, addUser } = require('../controllers/usersController')
const router =  express.Router()


router.route("/users").get(getUsers)
router.route("/login").post(loginUser)
router.route("/register").post(addUser)


router.route("/admin/projects").get(getAllProjects)



module.exports = router