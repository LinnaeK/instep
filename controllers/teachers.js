const User = require('../models/user')
const Student = require('../models/student')

module.exports = {
  index,
  dailyview,
  show,
  new: newTeacher,
  create,
  edit,
  update,
  delete: deleteTeacher,
  showstudents,
}

function index(req, res){
  User.find({isTeacher: true}, function(err, teachers){
    res.render('teachers/index', {
      user: req.user,
      title: 'View All Teachers',
      teachers,
    })
  })
}


function dailyview(req, res, next) {
  console.log('teacher controller')
    res.render('teachers/dailyview',{
      user: req.user,
      name: req.query.name,
      title: req.user.name
    })
  }

function show(req, res){
  User.findById(req.params.id, function(err, teacher){
    Student.find({teacher: teacher._id}, function(err, students){
    if(err){res.redirect('loggedin')}
    res.render('teachers/show', {
      user: req.user,
      title: teacher.firstName + ' ' + teacher.lastName,
      teacher,
      students
    })
  })
})
}

function newTeacher(req, res){
  res.render('teachers/new', {
    title: 'Add Teacher',
  user: req.user,
})
}

function create(req, res){
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  var user = new User(req.body)
  user.save(function(err){
    if(err) return res.redirect('teachers/new')
    res.redirect('/loggedin/admin')
  })
}

function edit(req, res){
  console.log(req.params.id)
  User.findById(req.params.id,function(err, user){
    console.log(user)
    res.render('teachers/edit', {
      user,
      title: 'Edit '+ user.firstName +' '+ user.lastName
    })
})
}

function update(req, res){
  console.log('arrive at update in teacher')
  User.findByIdAndUpdate(req.params.id, req.body, 
    {new: true}).then(function(){
    res.redirect('/teachers')
  })
}

function deleteTeacher(req, res){
  User.deleteOne({_id: req.params.id}, function(err, obj){})
  console.log('deleted teacher')
  res.redirect('/teachers')
}

function showstudents(req, res){
  User.findById(req.params.id, function(err, teacher){
    console.log(teacher)
    Student.find({teacher:req.params.id}, function(err, students){
      console.log(students.length)
      res.render('teachers/students', {
        user: req.user,
        teacher,
        students,
        title: 'Students of ' + teacher.firstName + teacher.lastName
      })
    })
  })
}