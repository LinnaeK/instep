var express = require('express');
var router = express.Router();
var teachersCntrl = require('../controllers/teachers')
var User = require('../models/user')
var auth = require('../public/js/authenticate')

/* GET users listing. */
router.get('/teachers', teachersCntrl.index);

// auth.isLoggedIn,

function isLoggedIn(req, res, next){
  console.log('is logged in')
  if (req.isAuthenticated()) return next()
  console.log('got past authentication')
  res.redirect('/auth/google')
}

module.exports = router;
