const User = require('../models/user')
const Student = require('../models/student')
const Room = require('../models/room')
const Studio = require('../models/studio')

module.exports = {
  index,
  show,
  new: newStudent,
  create,
  edit,
  update,
  delete: deleteStudent,
}

function index(req, res){
  Student.find({}, function(err, students){
    res.render('students/index', {
      user: req.user,
      title: 'View All students',
      students,
    })
  })
}

function show(req, res){
  Student.findById(req.params.id, function(err, student){
    User.findById(student.teacher, function(err, teacher){
      if(err){res.redirect('loggedin')}
      res.render('students/show', {
        user: req.user,
        title: student.firstName + ' ' + student.lastName,
        student, 
        teacher
      })
    })
  })
}

function newStudent(req, res){
  User.find({isTeacher: true}, function(err, teachers){
    res.render('students/new', {
      title: 'Add student',
      user: req.user,
      teachers
    })
  })
}

function create(req, res){
  console.log(req.body)
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  var room = new Room(req.body)
  console.log(req.body)
  room.studio = req.params.id
  room.save(function(err){
    if(err) return res.redirect('/studio')
    Studio.findById(req.params.id, function(err, studio){
      console.log('in studio find ', studio)
      studio.rooms.push(room._id)
      console.log(studio.rooms)
      studio.save(function(err){})
    })
    res.redirect('/loggedin/admin')
  })
}

function edit(req, res){
  console.log(req.params.id)
  Student.findById(req.params.id,function(err, student){
    User.find({isTeacher: true}, function(err, teachers){
      teachers.forEach(function(t){
        console.log(t.firstName, student.teacher.equals(t._id))
      })
    console.log(student)
    res.render('students/edit', {
      student,
      title: 'Edit '+ student.firstName +' '+ student.lastName,
      user: req.user,
      teachers
    })
    })
})
}

function update(req, res){
  console.log('arrive at update in student')
  Student.findByIdAndUpdate(req.params.id, req.body, 
    {new: true}).then(function(){
    res.redirect('/students')
  })
}

function deleteStudent(req, res){
  Student.deleteOne({_id: req.params.id}, function(err, obj){})
  console.log('deleted student')
  res.redirect('/students')
}