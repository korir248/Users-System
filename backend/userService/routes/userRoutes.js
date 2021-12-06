const express = require('express')
const auth = require('../controllers/authController')
const { getUsers, loginUser, addUser, deleteUser } = require('../controllers/usersController')
const router =  express.Router()


router.route("/users").get(auth,getUsers)
router.route("/login").post(loginUser)
router.route("/register").post(addUser)
router.route("/admin/users").delete(auth,deleteUser)
router.route("/admin/users").delete(auth,deleteUser)



module.exports = router