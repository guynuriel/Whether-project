const mongoose = require("mongoose")
const schema = mongoose.Schema


const CitySchema = new schema({
    name: String,
    updatedAt: Date,
    temperature: Number,
    condition: String,
    conditionPic: String
})

const Citymodel = mongoose.model("City", CitySchema)
module.exports = Citymodel