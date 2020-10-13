const express = require('express')
const router = express.Router()
const Banking = require('../models/Banking')
const Profile = require('../models/Profile')

router.get('/', async (req, res) => {
  try{
    const bankings = await Banking.find()
    res.json(bankings)
  } catch(err){res.json({message:err})}
})

router.delete('/:bankingId', async (req, res) => {
  try{
    const removedBanking = await Banking.findById(req.params.bankingId)
    const profile = await Profile.findById(removedBanking.profile)
    await removedBanking.remove()
    res.json(removedBanking)    
    const deletedBanking = profile.banking.filter(b => b._id === req.params.bankingId)
    console.log(deletedBanking);
    await deletedBanking.remove()
    await profile.save()
  } catch(err){res.json({message:err})}
})

module.exports = router