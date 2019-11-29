var express = require('express');
var router = express.Router();
var teachersCntrl = require('../controllers/teachers')
var studentsCntrl = require('../controllers/students')

var User = require('../models/user')
var auth = require('../public/js/authenticate')

/* GET users listing. */
router.get('/students/new', auth.isAdmin, studentsCntrl.new)
router.get('/students', auth.isAdmin, studentsCntrl.index)
router.get('/students/:id/edit', auth.isLoggedIn, studentsCntrl.edit)
router.get('/students/:id', auth.isLoggedIn, studentsCntrl.show)
router.put('/students/:id', auth.isLoggedIn, studentsCntrl.update)
router.post('/students', auth.isAdmin, studentsCntrl.create)
router.delete('/students/:id', auth.isAdmin, studentsCntrl.delete)

module.exports = router;
