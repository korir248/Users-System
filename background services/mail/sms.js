require('dotenv').config()
const AfricasTalking = require("africastalking");

const atalking = AfricasTalking({
	apiKey: process.env.apiKey,
	username: "sandbox",
});

module.exports = atalking;