const Mongoose = require('mongoose')
const Schema = Mongoose.Schema

var lessonSchema = new Schema({
    teacher: [{type: Schema.Types.ObjectId, ref: 'User'}],
    room: [{type: Schema.Types.ObjectId, ref: 'Room'}],
    student: [{type: Schema.Types.ObjectId, ref: 'Student'}],
    day: {
      type: Number,
      min: 0,
      max: 7
    },
    time: String,
    length: Number,
  }, {
    timestamps: true
  })

  module.exports = Mongoose.model('Lesson', lessonSchema)
