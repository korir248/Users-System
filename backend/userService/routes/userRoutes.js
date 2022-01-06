const express = require('express')
const auth = require('../middlewares/auth')
const { getUsers, loginUser, addUser, deleteUser, sendEmailRegister } = require('../controllers/usersController')
const router =  express.Router()


router.route("/users").get(auth,getUsers)
router.route("/login").post(loginUser)
router.route("/register").post(addUser)
router.route("/admin/users").delete(auth,deleteUser)

router.route("/email").get(sendEmailRegister)


module.exports = router