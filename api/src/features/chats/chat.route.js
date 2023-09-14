var express = require('express');
const authGuard = require('../../authorization/auth.middlewere');
const getChatHistory = require('./chat-history');
var router = express.Router();

/* GET /profile */
router.get('/histories',authGuard, getChatHistory);

module.exports = router;
