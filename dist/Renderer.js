


class Renderer{
    
    constructor(){
        
    }
    
    
    renderData(citydata){
        $("#bigbox").empty()
        
        let data = TempManager.cityData
        
        
        const source = $('#template').html()
        const template = Handlebars.compile(source)
        const newHTML = template({ data: citydata })
        $('#bigbox').append(newHTML)
    }
    
    
}