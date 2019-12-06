clndrFuncs = require('../public/js/calendar')
User = require('../models/user')
Room = require('../models/room')
Lesson = require('../models/lesson')
Student = require('../models/student')

module.exports = {
    new: newLesson,
    newLsn,
    create,
}

function newLesson(req, res){
    User.find({isTeacher: true}, function(err, teachers){
        Room.find({}, function(err, rooms){
            res.render('lessons/new', {
                selTchr: null,
                selRm: null,
                title: 'Create Lesson',
                user: req.user,
                clndrFuncs,
                teachers,
                rooms,
                student: req.params.student
            })
        })

    })
}

function newLsn(req, res){
    User.find({isTeacher: true}, function(err, teachers){
        User.findOne({_id: req.query.teacher}, function(err, selTchr){
            Room.find({}, function(err, rooms){
                Room.findById(req.query.room, function(err, selRm){
                    Student.findById(req.params.student, function(err, student){
                        res.render('lessons/new', {
                            title: 'Create Lesson',
                            selTchr,
                            selRm,
                            user: req.user,
                            clndrFuncs,
                            teachers,
                            rooms,
                            student
                        })

                    })

                })

        })
        })
    })
}


// function create(req, res){
//     for (let key in req.body) { // any empty elements in the submission form remove them
//         if (req.body[key] === '') delete req.body[key];
//       }
//     var lesson = new Lesson(req.body) // instanciate the new lesson
//     lesson.save(function(err){ // save the lesson
//         lesson.teacher = req.params.teacher //put teacher id in the lesson
//         console.log(lesson)
//         User.findById(req.params.teacher, function(err, teacher){ // get the teacer by id
//             console.log('in find ', teacher)
//             let updatedCalendar = clndrFuncs.manageEvent(lesson, teacher.calendar, lesson.day, lesson.time, lesson.length) //update teachers calendar
//             console.log('UPDATED CAL', updatedCalendar)
//             teacher.calendar = updatedCalendar // set the teachers calendar to the new calendar
//             console.log('TEACHER CAL:', teacher.calendar)
//             teacher.save(function(error, teacher){ // save the the teacher
//                 if(error) {
//                     console.error(error)
//                     res.status(500)
//                     res.json(error)
//                 }
//                 console.log('IN SAVE:', teacher.calendar.flat().filter(item => !!item))
//                 res.redirect('/loggedin/admin') 
//             })
        
//         })
//     })
// }
// TODO: all of the below in a function 
// any empty elements in the submission form remove them
// instanciate the new lesson
// save the lesson
// put teacher id in the lesson
// get the teacer by id
// set the teachers calendar to the new calendar
// save the the teacher

async function create(req, res) {
  try {
    const roomSelected = req.params.room
    const {day, time, length} = req.body
    const teacher = req.params.teacher
    console.log(req.params.student)
    // const student = Student.findById(req.params.student)
    const room = req.params.room._id
    const lesson = new Lesson({
        day,
        time,
        length
    })
    lesson.teacher.push(teacher)
    lesson.room.push(room)
    // lesson.student.push(student)
    const savedLesson = await lesson.save()

    const teach = await User.findById(teacher)

    teach.calendar = clndrFuncs.manageEvent(savedLesson, teach.calendar, lesson.day, lesson.time, lesson.length)
    teach.markModified('calendar')
    const result = await teach.save()

    // const roomUpdated = await Room.findById(roomSelected)
    // roomUpdated.calendar = clndrFuncs.manageEvent(savedLesson, room.calendar, lesson.day, lesson.time, lesson.length)
    // roomUpdated.markModified('calendar')
    // const roomResult = await teach.save()
    // console.log(roomResult)

    res.redirect('/loggedin/admin')
  } catch (error) {
      console.error(error)
      res.status(500)
      res.json(error) // change this to a string before its put in prod
  }
}