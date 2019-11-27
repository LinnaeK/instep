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
      let user = User.find({googleId: req.user.googleId})
      if (user.isAdmin) return next() 
      res.redirect('/loggedin/teacher')
    } 
  }