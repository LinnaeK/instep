const User = require('../models/user')
const Student = require('../models/student')

module.exports = {
  index,
  dailyview,
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
    if(err){res.redirect('loggedin')}
    res.render('students/show', {
      user: req.user,
      title: student.firstName + ' ' + student.lastName,
      students,
    })
  })
}

function newStudent(req, res){
  res.render('students/new', {
    title: 'Add student',
  user: req.user,
})
}

function create(req, res){
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  var user = new User(req.body)
  user.save(function(err){
    if(err) return res.redirect('students/new')
    res.redirect('/loggedin/admin')
  })
}

function edit(req, res){
  console.log(req.params.id)
  Student.findById(req.params.id,function(err, student){
    console.log(student)
    res.render('students/edit', {
      student,
      title: 'Edit '+ student.firstName +' '+ student.lastName
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