var express = require('express')
var app = express()
var path = require('path')
var mongoose = require('mongoose')
const api = require('./server/api')

mongoose.connect(process.env.MONGODB_URI ||"mongodb://localhost/places", { useNewUrlParser: true })
app.use(express.static(path.join(__dirname, 'dist')))

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/', api)



const port = process.env.port|| 3000
app.listen(port, function() {
    console.log(`Server up and running on port ${port}`)
  })
  
  