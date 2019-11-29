var express = require('express');
var router = express.Router();
var teachersCntrl = require('../controllers/teachers')
var User = require('../models/user')
var auth = require('../public/js/authenticate')

/* GET users listing. */
router.get('/teachers/new', auth.isAdmin, teachersCntrl.new)
router.get('/teachers', auth.isAdmin, teachersCntrl.index)
router.get('/teachers/dailyview', auth.isLoggedIn, teachersCntrl.dailyview);
router.get('/teachers/:id/edit', auth.isLoggedIn, teachersCntrl.edit)
router.get('/teachers/:id', auth.isLoggedIn, teachersCntrl.show)
router.put('/teachers/:id', auth.isLoggedIn, teachersCntrl.update)
router.post('/teachers', auth.isAdmin, teachersCntrl.create)
router.delete('/teachers/:id', auth.isAdmin, teachersCntrl.delete)




module.exports = router;
