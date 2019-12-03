var express = require('express');
var router = express.Router();
var teachersCntrl = require('../controllers/teachers')
var studentsCntrl = require('../controllers/teachers')
var roomsCntrl = require('../controllers/rooms')

var User = require('../models/user')
var auth = require('../public/js/authenticate')

/* GET users listing. */
// router.get('/new', auth.isAdmin, studentsCntrl.new)
// router.get('/', auth.isAdmin, studentsCntrl.index)
// router.get('/:id/edit', auth.isLoggedIn, studentsCntrl.edit)
// router.get('/:id', auth.isLoggedIn, studentsCntrl.show)
// router.put('/:id', auth.isLoggedIn, studentsCntrl.update)
router.post('/:id', auth.isAdmin, roomsCntrl.create)
router.delete('/:id', auth.isAdmin, roomsCntrl.delete)

module.exports = router;
