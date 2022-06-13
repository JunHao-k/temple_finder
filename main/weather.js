const WEATHER_URL = 'https://api.data.gov.sg/v1/environment/2-hour-weather-forecast'

let getWeatherData = async () => {
    let response = await axios.get(WEATHER_URL)
    console.log(response.data)
    // return response.data
}