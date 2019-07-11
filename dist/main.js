const tempMeneger = new TempManager
const renderer = new Renderer


const loadPage = async function(){
    await tempMeneger.getDataFromDB()
    const d = tempMeneger.cityData
    await renderer.renderData(d)
}

loadPage()

const handleSearch = async function(){
    const input = $("#input").val()
    await tempMeneger.getCityData(input)
    const d = tempMeneger.cityData
    await renderer.renderData(d)
}


$("body").on("click",".savebutton",function(){
const name = $(this).siblings('h2').text()
tempMeneger.saveCity(name)
})

$("body").on("click",".deletebutton",function(){
    const name = $(this).siblings('h2').text()
    tempMeneger.removeCity(name)
    location.reload()
    })







