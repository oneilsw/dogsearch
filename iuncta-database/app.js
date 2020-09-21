const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv/config')

app.use(cors())
app.use(bodyParser.json())

const accountsRoute = require('./routes/accounts')
const profilesRoute = require('./routes/profiles')

app.use('/accounts', accountsRoute)
app.use('/profiles', profilesRoute)

app.get('/', (req, res) => {
  res.send('Hola!')
})

mongoose.connect(process.env.DB_CONNECTION, 
  { useNewUrlParser: true },
  ()=>{console.log("Connected to DB");}
)

 app.listen(3000)