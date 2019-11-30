var express = require('express');
var router = express.Router();
var teachersCntrl = require('../controllers/teachers')
var User = require('../models/user')
var auth = require('../public/js/authenticate')

/* GET users listing. */
router.get('/new', auth.isAdmin, teachersCntrl.new)
router.get('/', auth.isAdmin, teachersCntrl.index)
router.get('/dailyview', auth.isLoggedIn, teachersCntrl.dailyview);
router.get('/:id/edit', auth.isLoggedIn, teachersCntrl.edit)
router.get('/:id', auth.isLoggedIn, teachersCntrl.show)
router.get('/:id/students', auth.isLoggedIn, teachersCntrl.showstudents)
router.put('/:id', auth.isLoggedIn, teachersCntrl.update)
router.post('/', auth.isAdmin, teachersCntrl.create)
router.delete('/:id', auth.isAdmin, teachersCntrl.delete)




module.exports = router;
