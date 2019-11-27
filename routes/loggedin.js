var express = require('express');
var router = express.Router();
var loggedinCntrl = require('../controllers/loggedin')
var teachersCntrl = require('../controllers/teachers')
var adminsCntrl = require('../controllers/admins')
var User = require('../models/user')
var auth = require('../public/js/authenticate')

/* GET users listing. */
router.get('/loggedin/admin', auth.isAdmin, adminsCntrl.index);
router.get('/loggedin/teacher', auth.isLoggedIn, teachersCntrl.index);





module.exports = router;
