// const WEATHER_URL = 'https://api.data.gov.sg/v1/environment/2-hour-weather-forecast'

// let getWeatherData = async (templeCoord) => {
//     let response = await axios.get(WEATHER_URL)
//     let areaData = response.data.area_metadata
//     console.log(response.data)
//     let distance = getDist(templeCoord[0] , templeCoord[1] , areaData[0].label_location.latitude , areaData[0].label_location.longitude)
//     let finalArea = areaData[0].name

//     for(area of areaData){
//         let area_lat = area.label_location.latitude
//         let area_lng = area.label_location.longitude
//         let temp_distance = getDist(templeCoord[0] , templeCoord[1] , area_lat , area_lng)
//         // finalArea = (temp_distance < distance) ?  area.name : finalArea

//         if(temp_distance < distance){
//             finalArea = area.name
//         }
//     }
    
//     // (t_lat , t_lng , areaLat , areaLng)
//     console.log(finalArea)
//     // console.log(getDist(1.365609, 103.858307 , 1.375 , 103.839))
// }
const WEATHER_BASE_URL = "https://api.openweathermap.org/data/2.5/weather"
const WEATHER_API_KEY = "fd7205e566330a9390744831f90972ea"
let getWeatherData = async (templeCoord) => {
    //WEATHER_BASE_URL?lat=1.350772&lon=103.839&appid=WEATHER_API_KEY
    let weather_endpoint = WEATHER_BASE_URL + `?lat=${templeCoord[0]}&lon=${templeCoord[1]}&appid=` + WEATHER_API_KEY + "&units=metric"
    let response = await axios.get(weather_endpoint)
    let status = response.data.weather[0].main
    let temperature = response.data.main.temp
    let min_temp = response.data.main.temp_min
    let max_temp = response.data.main.temp_max
    let temp_feels = response.data.main.feels_like
    let tempArr = [status , temperature , min_temp , max_temp , temp_feels]
    return tempArr
}