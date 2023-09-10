var express = require('express');
const authGuard = require('../authorization/auth.middlewere');
var router = express.Router();

/* GET home page. */
router.get('/',authGuard, function(req, res, next) {
    res.json({
        msg: 'Welcome',
        claim: req.sub
    });
//   res.render('index', { title: 'Express' });
});

module.exports = router;
