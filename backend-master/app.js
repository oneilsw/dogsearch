const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path');
require('dotenv/config')

app.use(cors())
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'client/build')))

const accountsRoute = require('./routes/accounts')
const profilesRoute = require('./routes/profiles')
const bankingsRoute = require('./routes/bankings')
const cardsRoute = require('./routes/cards')

mongoose.connect(process.env.DB_CONNECTION, 
  { useNewUrlParser: true },
  { useUnifiedTopology: true },
  ()=>{console.log("Connected to the DB");}
)

app.use('/accounts', accountsRoute)
app.use('/profiles', profilesRoute)
app.use('/bankings', bankingsRoute)
app.use('/cards', cardsRoute)

app.get('/', (req, res) => {
  res.send('Welcome to Iuncta!')
})

 app.listen(80)