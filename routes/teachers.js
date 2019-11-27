var express = require('express');
var router = express.Router();
var teachersCntrl = require('../controllers/loggedin')
var User = require('../models/user')
var auth = require('../public/js/authenticate')

/* GET users listing. */
router.get('/teachers', auth.isLoggedIn, teachersCntrl.index);





module.exports = router;
