const Mongoose = require('mongoose')
const Schema = Mongoose.Schema

var roomSchema = new Schema({
    name: String,
    lessons: [Schema.Types.ObjectId],
  }, {
    timestamps: true
  })

  module.exports = Mongoose.model('Room', roomSchema)
