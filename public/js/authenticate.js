// lets move this into a utils folder

const User = require('../../models/user')
module.exports = {
    isLoggedIn,
    isAdmin,
}

function isLoggedIn(req, res, next){
    console.log('is logged in')
    if (req.isAuthenticated()) return next()
    console.log('got past authentication')
    res.redirect('/auth/google')
  }
  
  function isAdmin(req, res, next){
    console.log('is admin')
    if (req.isAuthenticated()){
      console.log(req.user.googleId)
      User.findOne({googleId: req.user.googleId}, function(err, user){
        console.log('user isAdmin : ', user.isAdmin)
        if (user.isAdmin) return next();
        res.redirect('/loggedin/teacher')
      })
    } 
  }