var express = require('express')
var app = express()
var path = require('path')
var request = require('request')
var mongoose = require('mongoose')
const api = require('./server/api')

mongoose.connect("mongodb://localhost/places", { useNewUrlParser: true })
app.use(express.static(path.join(__dirname, 'dist')))

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/', api)




app.listen(3000, function() {
    console.log("Server up and running on port 3000")
  })
  
  