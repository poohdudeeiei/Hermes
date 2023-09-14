var express = require('express');
var getUserId = require("../controllers/users/user.rout")
var router = express.Router();

/* GET users listing. */
router.get('/profile/:id', getUserId)

module.exports = router;
