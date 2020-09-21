const mongoose = require('mongoose')

const AccountSchema = mongoose.Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  username: {type: String, required: true},
  email: {type: String, required: true},
  phone: {type: String,required: true}, 
  profiles:[{type: mongoose.Schema.Types.ObjectId, ref: 'Profile'}]
})

module.exports = mongoose.model('Accounts', AccountSchema)