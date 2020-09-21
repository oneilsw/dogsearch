const express = require('express')
const router = express.Router()
const Account = require('../models/Account')

router.get('/', async (req, res) => {
  try{
    const accounts = await Account.find()
    res.json(accounts)
  } catch(err){res.json({message:err})}
})

router.get('/:accountId', async (req, res) => {
  try{
    const account = await Account.findById(req.params.accountId)
    res.json(account)
  } catch(err){res.json({messgage:err})}
})

router.post('/', async (req, res) => {
  const account = new Account({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    username: req.body.username,
    email: req.body.email,
    phone: req.body.phone
  })
  try{
    const savedAccount = await account.save()
    res.json(savedAccount)
  } catch(err){res.json({message: err})}
})

router.delete('/:accountId', async (req, res) => {
  try{
    const removedAccount = await Account.deleteOne({_id: req.params.accountId})
    res.json(removedAccount)
  } catch(err){res.json({message:err})}
})

router.patch('/:accountId', async (req, res) => {
  const updates = Object.keys(req.body)
  try{
    const updatedAccount = await Account.findById(req.params.accountId)
      updates.forEach(update => updatedAccount[update] = req.body[update])
      await updatedAccount.save()
      res.json(updatedAccount)
  } catch(err){res.json({message:err})}
})

module.exports = router