const Mongoose = require('mongoose')
const Schema = Mongoose.Schema

var userSchema = require('./user').schema
var roomSchema = require('./room').schema

var studioSchema = new Schema({
    name: String,
    streetAdd: String,
    city: String,
    state: String,
    zip: Number,
    teachers: [userSchema],
    rooms: [roomSchema]
  }, {
    timestamps: true
  })

  module.exports = Mongoose.model('Studio', studioSchema)
