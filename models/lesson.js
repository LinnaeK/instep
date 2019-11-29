const Mongoose = require('mongoose')
const Schema = Mongoose.Schema

var lessonSchema = new Schema({
    teacher: Schema.Types.ObjectId,
    room: Schema.Types.ObjectId,
    student: Schema.Types.ObjectId,
    date: Date,
  }, {
    timestamps: true
  })

  module.exports = Mongoose.model('Lesson', lessonSchema)
