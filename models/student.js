const Mongoose = require('mongoose')
const Schema = Mongoose.Schema

var lessonSchema = require('./lesson').schema

var studentSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    lessons: [lessonSchema],
    phoneNum: String,
    email: String,
    streetAdd: String,
    city: String,
    state: String,
    zip: Number,
    instruments: [],
    teacher: Schema.Types.ObjectId,
    birthdate: String,
    startDate: Date,
  }, {
    timestamps: true
  });
  
  module.exports = Mongoose.model('Student', studentSchema);