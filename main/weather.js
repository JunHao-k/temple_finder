const WEATHER_URL = 'https://api.data.gov.sg/v1/environment/2-hour-weather-forecast'

let getWeatherData = async (templeCoord) => {
    let response = await axios.get(WEATHER_URL)
    let areaData = response.data.area_metadata
    console.log(response.data)
    let distance = getDist(templeCoord[0] , templeCoord[1] , areaData[0].label_location.latitude , areaData[0].label_location.longitude)
    let finalArea = areaData[0].name

    for(area of areaData){
        let area_lat = area.label_location.latitude
        let area_lng = area.label_location.longitude
        let temp_distance = getDist(templeCoord[0] , templeCoord[1] , area_lat , area_lng)
        // finalArea = (temp_distance < distance) ?  area.name : finalArea

        if(temp_distance < distance){
            finalArea = area.name
        }
    }
    
    // (t_lat , t_lng , areaLat , areaLng)
    console.log(finalArea)
    // console.log(getDist(1.365609, 103.858307 , 1.375 , 103.839))
}

