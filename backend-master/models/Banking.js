const mongoose = require('mongoose')

const BankingSchema = mongoose.Schema({
  profile: {type: mongoose.Schema.Types.ObjectId, ref: 'Profile', required: true},
  bankAccountNumber: {type: Number, required: true},
  routingNumber: {type: Number, required: true}
})

module.exports = mongoose.model('Banking', BankingSchema)