const express = require('express')
const { getUsers } = require('../controllers/usersController')
const router =  express.Router()


router.route("/users").get(getUsers)