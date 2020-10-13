const mongoose = require('mongoose')

const AccountSchema = mongoose.Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  username: {type: String, required: true, unique: true},
  email: {type: String, required: true, unique: true},
  phone: {type: String,required: true},
  profiles:[{type: mongoose.Schema.Types.ObjectId, ref: 'Profile'}]
})

module.exports = mongoose.model('Account', AccountSchema)