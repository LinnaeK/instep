const Mongoose = require('mongoose')
const Schema = Mongoose.Schema

var userSchema = require('./user').schema
var roomSchema = require('./room').schema

var studioSchema = new Schema({
    name: String,
    phoneNum: String,
    email: String,
    streetAdd: String,
    city: String,
    state: String,
    zip: Number,
    teachers: [{type: Schema.Types.ObjectId, ref: 'User'}],
    rooms: [{type: Schema.Types.ObjectId, ref: 'Room'}]
  }, {
    timestamps: true
  })

  module.exports = Mongoose.model('Studio', studioSchema)
