const express = require('express')
const router = express.Router()
const Account = require('../models/Account')
const Profile = require('../models/Profile')

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

router.post('/:accountId/profiles', async (req, res) => {
  const profile = new Profile({
    account: req.params.accountId,
    name: req.body.name,
    email: req.body.email,
    occupation: req.body.occupation,
    company: req.body.company,
    position: req.body.position,
    website: req.body.website,
    addressLine1: req.body.addressLine1,
    addressLine2: req.body.addressLine2,
    addressCity: req.body.addressCity,
    addressState: req.body.addressState,
    addressZip: req.body.addressZip,
    birthMonth: req.body.birthMonth,
    birthDay: req.body.birthDay,
    birthYear: req.body.birthYear,
    gender: req.body.gender
  })
  try{
    const savedProfile = await profile.save()
    res.json(savedProfile)
    const account = await Account.findById(req.params.accountId)
    account.profiles.push(savedProfile.id)
    await account.save()    
  } catch(err){res.json({message: err})}
})

// get a profile

router.get('/:accountId/profiles/:profileId', async (req, res) => {
  try{
    const profile = await Profile.findById(req.params.profileId)
    res.json(profile)
  } catch(err){res.json({messgage:err})}
})



module.exports = router