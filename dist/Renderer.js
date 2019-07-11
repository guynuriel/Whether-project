


class Renderer{
    
    constructor(){
        
    }
    
    
    renderData(citydata){
        $("#bigbox").empty()
        
        const source = $('#template').html()
        const template = Handlebars.compile(source)
        const newHTML = template({ data: citydata })
        $('#bigbox').append(newHTML)
        console.log("god demet")
    }
    
    
}