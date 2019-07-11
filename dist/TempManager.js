import { url } from "inspector";


class TempManager {
    constructor() {
        this.cityData = []
    }
    async getDataFromDB() {
        await $.get('/cities',function(req,res){
            let data = req
            this.Cityname.push(data)
            res.end()
        })

    }
    async getCityData(cityName) {
        await $.get(`/city/${cityName}`,function(req,res){
            cityData.push({
            Cityname: req.name,
            Temperature : req.Temperature,
            Conditions : req.Conditions,
            Conditionicon : req.ConditionpIC,
            lastupdated : req.updatedAT
            })
        })

       

    }
    async saveCity(cityName) {
        const cityD = await this.cityData.find(c => c.Name == cityName)
        await $.post('/city', cityD)
    }


    removeCity(cityName) {
        $ajax({
            method:"delete",
            url:`http://localhost:3000/city/${cityName}` ,
            success: function(data){
                console.log(data)
            },
            error:function(xhr,text,err){
            
            }
        })
    }

}



// TempManager.getDataFromDB()