var express = require('express');
var router = express.Router();
var auth = require('../public/js/authenticate')
var lessonsCntrl = require('../controllers/lessons')

router.post('/', auth.isAdmin, lessonsCntrl.create)
router.get('/new', auth.isAdmin, lessonsCntrl.new)

module.exports = router;