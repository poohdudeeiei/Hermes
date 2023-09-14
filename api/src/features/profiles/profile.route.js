var express = require('express');
const getProfileFromToken = require('./from-token');
const authGuard = require('../../authorization/auth.middlewere');
var router = express.Router();

/* GET /profile */
router.get('/',authGuard, getProfileFromToken);

module.exports = router;

