const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path');
const server = require('http').createServer();
require('dotenv/config')

app.use(cors())
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'client/build')))

const accountsRoute = require('./routes/accounts')
const profilesRoute = require('./routes/profiles')
const bankingsRoute = require('./routes/bankings')
const cardsRoute = require('./routes/cards')

app.use('/accounts', accountsRoute)
app.use('/profiles', profilesRoute)
app.use('/bankings', bankingsRoute)
app.use('/cards', cardsRoute)

app.get('/', (req, res) => {
  res.send('Welcome To Iuncta API!')
})

mongoose.connect(process.env.DB_CONNECTION, 
  { useNewUrlParser: true },
  { useUnifiedTopology: true },
  ()=>{console.log("Connected to DB");}
)

const port = process.env.PORT || 8000;
 app.listen(port)
//  server.listen(port, () => console.log(`Listening on ${port}`));

module.exports = app