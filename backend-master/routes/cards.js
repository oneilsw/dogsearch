const express = require('express')
const router = express.Router()
const Card = require('../models/Card')
const Profile = require('../models/Profile')

router.get('/', async (req, res) => {
  try{
    const cards = await Car.find()
    res.json(cards)
  } catch(err){res.json({message:err})}
})

router.delete('/:cardId', async (req, res) => {
  try{
    const removedCard = await Card.findById(req.params.cardId)
    const profile = await Profile.findById(removedCard.profile)
    await removedCard.remove()
    res.json(removedCard)
    console.log(profile);
    const updatedProfile = _.pull(profile.cards, removedCard)
    await updatedProfile.save()
    console.log(updatedProfile)
  } catch(err){res.json({message:err})}
})

module.exports = router