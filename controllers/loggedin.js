const User = require('../models/user')

module.exports = {
  index,
}


function index(req, res, next) {
  console.log('loggedin controller')
    res.render('teachers/index',{
      user: req.user,
      name: req.query.name,
    })
  }