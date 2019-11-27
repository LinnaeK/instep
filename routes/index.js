var express = require('express');
var router = express.Router();
var passport = require('passport');
var userCtrl = require('../controllers/users')
var teachersCntrl = require('../controllers/teachers')
var adminCntrl = require('../controllers/admin')
var auth = require('../public/js/authenticate')

/* GET home page. */
router.get('/', userCtrl.index);
router.get('/loggedin/', teachersCntrl.index);
router.get('/loggedin/', auth.isLoggedIn, auth.isAdmin, adminCntrl.index);

router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/teachers',
    failureRedirect : '/'
  }
));

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

module.exports = router;
