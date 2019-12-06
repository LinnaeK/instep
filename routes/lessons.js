var express = require('express');
var router = express.Router();
var auth = require('../public/js/authenticate')
var lessonsCntrl = require('../controllers/lessons')

router.get('/new/:student', auth.isAdmin, lessonsCntrl.new)
router.get('/:student', auth.isAdmin, lessonsCntrl.newLsn)
router.post('/:teacher/:room/:student', auth.isAdmin, lessonsCntrl.create)

module.exports = router;