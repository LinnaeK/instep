var express = require('express');
var router = express.Router();
var teachersCntrl = require('../controllers/teachers')
var studentsCntrl = require('../controllers/students')

var User = require('../models/user')
var auth = require('../public/js/authenticate')

/* GET users listing. */
router.get('/new', auth.isAdmin, studentsCntrl.new)
router.get('/', auth.isAdmin, studentsCntrl.index)
router.get('/:id/edit', auth.isLoggedIn, studentsCntrl.edit)
router.get('/:id', auth.isLoggedIn, studentsCntrl.show)
router.put('/:id', auth.isLoggedIn, studentsCntrl.update)
router.post('/', auth.isAdmin, studentsCntrl.create)
router.delete('/:id', auth.isAdmin, studentsCntrl.delete)

module.exports = router;
