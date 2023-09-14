const express = require("express")
const contactUser = require("../controllers/chatContact/chat.rout")
const authGuard = require("../authorization/auth.middlewere")
var checkSub = require("../controllers/chatContact/chat.middleware")
var router = express.Router()

/* GET contacts User*/
router.get("/contacts/:id", authGuard, checkSub, contactUser);

module.exports = router
