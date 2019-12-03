googleAPI = require('../public/js/index')

module.exports = {
    create,
    new: newLesson,
}

function newLesson(req, res){
    res.render('lessons/new', {
        title: 'Create Lesson',
        user: req.user
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