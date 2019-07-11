


class TempManager {
    constructor() {
    this.cityData = []
    }
    async getDataFromDB() {
        let data = await $.get('/cities',function(res){
         return  res
        })
    data.forEach(d => this.cityData.push(d));
    }

    
    async getCityData(cityName) {

        const res = await $.get(`/city/${cityName}`)
            let x = {
            name: res.location.name,
            temperature : res.current.temp_c,
            condition : res.current.condition.text,
            conditionPic : res.current.condition.icon,
            updatedAt : res.current.last_updated
            }
        this.cityData.push(x)
       

    }
        saveCity(cityName) {
        const cityD =this.cityData.find(c => c.name === cityName)
         $.post('/city', cityD ,function(data,status){
            console.log("status:",status)
            console.log('data:',data)
        })
    }


    removeCity(cityName) {
        $.ajax({
            method:"DELETE",
            url:`http://localhost:3000/city/${cityName}` ,
            success: function(data){
                console.log(data)
            },
        })
    }

}



