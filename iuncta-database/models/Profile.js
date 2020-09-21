const mongoose = require('mongoose')

const ProfileSchema = mongoose.Schema({
  account:{type: mongoose.Schema.Types.ObjectId, ref: 'Account', required: true},
  name:{type: String, required: true},
  email:{type: String, required: true},
  occupation:{type: String, required: true},
  company: {type: String, required: true},
  position: {type: String},
  website: {type: String},
  addressLine1: {type: String, required: true},
  addressLine2: {type: String},
  addressCity: {type: String, required: true},
  addressState: {type: String, required: true},
  addressZip: {type: Number, required: true},
  birthMonth: {type: Number, required: true}, 
  birthDay: {type: Number, required: true},
  birthYear: {type: Number, required: true},
  gender: {type: String}
})

module.exports = mongoose.model('Profiles', ProfileSchema)