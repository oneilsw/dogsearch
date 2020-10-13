const mongoose = require('mongoose')

const CardSchema = mongoose.Schema({
  profile: {type: mongoose.Schema.Types.ObjectId, ref: 'Profile', required: true},
  fullName: {type: String, required: true},
  number: {type: Number, required: true},
  expire: {type: Number, required: true},
  cvv: {type: Number, required: true},
  addressLine1: {type: String, required: true},
  addressLine2: {type: String},
  addressCity: {type: String, required: true},
  addressState: {type: String, required: true},
  addressZip: {type: Number, required: true}
  // secure the CVV
})

module.exports = mongoose.model('Card', CardSchema)