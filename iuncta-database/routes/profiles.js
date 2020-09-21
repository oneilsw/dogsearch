const express = require('express')
const router = express.Router()
const Profile = require('../models/Profile')

router.get('/', async (req, res) => {
  try{
    const profiles = await Profile.find()
    res.json(profiles)
  } catch(err){res.json({message:err})}
})

router.get('/:profileId', async (req, res) => {
  try{
    const profile = await Profile.findById(req.params.profileId)
    res.json(profile)
  } catch(err){res.json({messgage:err})}
})

router.post('/', async (req, res) => {
  const profile = new Profile({
    account: req.body.account,
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
  } catch(err){res.json({message: err})}
})

router.delete('/:profileId', async (req, res) => {
  try{
    const removedProfile = await Profile.deleteOne({_id: req.params.profileId})
    res.json(removedProfile)
  } catch(err){res.json({message:err})}
})

router.patch('/:profileId', async (req, res) => {
  const updates = Object.keys(req.body)
  try{
    const updatedProfile = await Account.findById(req.params.profileId)
      updates.forEach(update => updatedProfile[update] = req.body[update])
      await updatedProfile.save()
      res.json(updatedProfile)
  } catch(err){res.json({message:err})}
})

module.exports = router