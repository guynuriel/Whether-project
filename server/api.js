const request = require("request")
const express = require('express')
const router = express.Router()
const City = require("./City")



router.get("/city/:cityname", function (req, res) {
    const cityname = req.params.cityname
    request(`https://api.apixu.com/v1/current.json?key=7429b875967441fc8de112701191007&q=${cityname}`, function (error, response,body) {
        let data = JSON.parse(body)
        res.send(data)
    })

})

router.get("/cities",function(req,res){
    City.find({},function(err,city){
    res.send(city)
    })
})

router.post("/city" , function(req,res){
  const citydata = req.body
  const c1 = new City(citydata)
  c1.save()
  res.end()
})


router.delete("/city/:cityname",function(req,res){
    let city = req.params.cityname 
    City.findOneAndDelete({ "name" : city}).then(function(){

    })
    res.end()
})


module.exports = router