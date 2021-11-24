const express = require('express')
const { getUsers, loginUser, addUser } = require('../controllers/usersController')
const router =  express.Router()


router.route("/users").get(getUsers)

router.route("/login").post(loginUser)
router.route("/register").post(addUser)



module.exports = router