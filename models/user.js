const Mongoose = require('mongoose')
const Schema = Mongoose.Schema

var lessonSchema = require('./lesson').schema
var studentSchema = require('./student').schema

var userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    googleId: String,
    isAdmin: {type: Boolean, default: false},
    isTeacher: {type: Boolean, default: true},
    lessons: [lessonSchema],
    phoneNum: String,
    email: String,
    streetAdd: String,
    city: String,
    state: String,
    zip: Number,
    instruments: [],
    students:[{type: Schema.Types.ObjectId, ref: 'Student'}],
    studios:[{type: Schema.Types.ObjectId, ref: 'Studio'}],
    calendar: Array
  }, {
    timestamps: true
  });
  
  module.exports = Mongoose.model('User', userSchema);