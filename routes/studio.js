var express = require('express');
var router = express.Router();
var teachersCntrl = require('../controllers/teachers')
var studentsCntrl = require('../controllers/students')
var studioCntrl = require('../controllers/studio')

var User = require('../models/user')
var auth = require('../public/js/authenticate')

/* GET users listing. */
router.get('/new', auth.isAdmin, studioCntrl.new)
router.get('/', auth.isAdmin, studioCntrl.index)
router.get('/:id/edit', auth.isAdmin, studioCntrl.edit)
router.get('/:id', auth.isLoggedIn, studioCntrl.show)
router.put('/:id', auth.isAdmin, studioCntrl.update)
router.post('/', auth.isAdmin, studioCntrl.create)
router.delete('/:id', auth.isAdmin, studioCntrl.delete)

module.exports = router;
