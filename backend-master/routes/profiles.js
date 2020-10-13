const express = require('express')
const router = express.Router()
const Profile = require('../models/Profile')
const Banking = require('../models/Banking')
const Card = require('../models/Card')

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

// Adding a bank account to a profile

router.post('/:profileId/bankings', async (req, res) => {
  const banking = new Banking({
    profile: req.params.profileId,
    bankAccountNumber: req.body.bankAccountNumber,
    routingNumber: req.body.routingNumber
  })
  try{
    const savedBanking = await banking.save()
    res.json(savedBanking)
    const profile = await Profile.findById(req.params.profileId)
    profile.banking.push(savedBanking.id)
    await profile.save()    
  } catch(err){res.json({message: err})}
  
})

router.post('/:profileId/cards', async (req, res) => {
  const card = new Card({
    profile: req.params.profileId,
    number: req.body.number,
    expire: req.body.expire,
    cvv: req.body.cvv
  })
  try{
    const savedCard = await card.save()
    res.json(savedCard)
    const profile = await Profile.findById(req.params.profileId)
    profile.card.push(savedCard.id)
    await profile.save()    
  } catch(err){res.json({message: err})}
})

module.exports = router