User = require('../models/user')

module.exports ={
    index,
    newday: newDay,
}

function index(req, res, next) {
  User.find({isTeacher: true}, function(err, teachers){
    console.log('admin controller')
    res.render('admin/index',{
      day: 1,
      user: req.user,
      name: req.query.name,
      title: 'Admin Page', 
      teachers,
    })
  })
  }

  function newDay(req, res){
    console.log('ran new day')
    console.log('day:', req.body.day)
    User.find({isTeacher: true}, function(err, teachers){
    res.render('admin/index',{
      day: req.body.day,
      user: req.user,
      name: req.query.name,
      title: 'Admin Page',
      teachers
    })
    })
  }