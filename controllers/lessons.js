clndrFuncs = require('../public/js/calendar')
User = require('../models/user')
Room = require('../models/room')

module.exports = {
    create,
    new: newLesson,
    newLsn,
}

function newLsn(req, res){
    User.find({isTeacher: true}, function(err, teachers){
        User.find({_id: req.query.teacher}, function(err, selTchr){
            Room.find({}, function(err, rooms){
                Room.find({_id:req.query.room}, function(err, selRm){
                    console.log(selTchr, selRm)
                    console.log(req.query.teacher)
                    console.log(req.params.room)
                    res.render('lessons/new', {
                        title: 'Create Lesson',
                        selTchr,
                        selRm,
                        user: req.user,
                        clndrFuncs,
                        teachers,
                        rooms
                    })

                })

        })
        })
    })
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
                rooms
            })
        })

    })
}

function create(req, res){
    let newLesson = {
        'start': {
            dateTime: req.body.start, 
        },
        'end': {
            dateTime: req.body.end
        }
    }
    console.log(newLesson)
    googleAPI.isBusy(newLesson)
}