const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const api = require('./server/api')
const app = express()
const bodyParser = require('body-parser')
app.use(express.static(path.join(__dirname, 'dist')))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/', api)

mongoose.connect(process.env.MONGODB_URI ||"mongodb://localhost/places", { useNewUrlParser: true })


const port =  3000
app.listen(process.env.PORT||port, function() {
    console.log(`Server up and running on port ${port}`)
  })
  
  