const mongoose = require('mongoose')

const ProfileSchema = mongoose.Schema({
  account: {type: mongoose.Schema.Types.ObjectId, ref: 'Account', required: true},
  default: {type: Boolean},
  validated: {type: Boolean},
  name: {type: String, required: true},
  email: {type: String, required: true},
  occupation: {type: String, required: true},
  company: {type: String, required: true},
  position: {type: String},
  website: {type: String},
  addressLine1: {type: String, required: true},
  addressLine2: {type: String},
  addressCity: {type: String, required: true},
  addressState: {type: String, required: true},
  addressZip: {type: Number, required: true},
  birthDate: {type: Number, required: true},
  gender: {type: String},
  banking: [{type: mongoose.Schema.Types.ObjectId, ref: 'Banking'}],
  cards: [{type: mongoose.Schema.Types.ObjectId, ref: 'Card'}]
})

module.exports = mongoose.model('Profile', ProfileSchema)