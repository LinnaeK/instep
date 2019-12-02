const User = require('../models/user')
const Student = require('../models/student')
const Studio = require('../models/studio')
const Room = require('../models/room')

module.exports = {
  index,
  show,
  new: newStudio,
  create,
  edit,
  update,
  delete: deleteStudio,
}

function index(req, res){
  Studio.find({}, function(err, studios){
    res.render('studios/index', {
      user: req.user,
      title: 'View All Studios',
      studios,
    })
  })
}

function show(req, res){
  Studio.findById(req.params.id)
  .populate('teachers').exec(function(err, studio) {
    User.find({_id: {$in: studio.teachers}})
    .exec(function(err, teachers){
      Studio.findById(req.params.id)
      .populate('Room').exec(function(err, rooms){
        Room.find({_id: {$in: studio.rooms}})
        console.log("rooms: ", studio.rooms)
        console.log(studio.rooms.length)
        res.render('studios/show', {
          user: req.user,
          title: studio.name,
          studio, 
          teachers, 
          rooms
        })
    })
  })
})
}

function newStudio(req, res){
  User.find({isTeacher: true}, function(err, teachers){
    console.log(teachers)
    res.render('studios/new', {
      title: 'Add studio',
      user: req.user,
      teachers
    })
  })
}

function create(req, res){
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  var studio = new Studio(req.body)
  studio.save(function(err){
    if(err) return res.redirect('/studios/new')
    res.redirect('/loggedin/admin')
  })
}

function edit(req, res){
  console.log(req.params.id)
  Studio.findById(req.params.id,function(err, studio){
    User.find({isTeacher: true}, function(err, teachers){
      console.log(studio)
      res.render('studios/edit', {
        studio,
        title: 'Edit '+ studio.name,
        user: req.user,
        teachers,
      })
    })
    })
}

function update(req, res){
  console.log('arrive at update in studio')
  Studio.findByIdAndUpdate(req.params.id, req.body, 
    {new: true}).then(function(){
    res.redirect('/studios')
  })
}

function deleteStudio(req, res){
  Studio.deleteOne({_id: req.params.id}, function(err, obj){})
  console.log('deleted studio')
  res.redirect('/studios')
}