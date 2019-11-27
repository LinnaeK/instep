var express = require('express');
var router = express.Router();
var teachersCntrl = require('../controllers/teachers')
var User = require('../models/user')

/* GET users listing. */
router.get('/', isLoggedIn, teachersCntrl.index);

function isLoggedIn(req, res, next){
  if (req.isAuthenticated()) return next()
  res.redirect('/auth/google')
}

function isAdmin(req, res, next){
  if (req.isAuthenticated()){
    let user = User.find({googleId: req.user.googleId})
    if (user.isAdmin) return next() 
    res.redirect('401')
  } 
}


module.exports = router;
