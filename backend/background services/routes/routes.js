const express = require('express')
const sendEmail = require('../controllers/mailController')
const router = express.Router()

router.route("/send").get(sendEmail)

module.exports = router