const WEATHER_BASE_URL = "https://api.openweathermap.org/data/2.5/weather"
const WEATHER_API_KEY = "fd7205e566330a9390744831f90972ea"
const iconLink = "http://openweathermap.org/img/wn/"

let getWeatherData = async (templeCoord) => {
    
    let weather_endpoint = WEATHER_BASE_URL + `?lat=${templeCoord[0]}&lon=${templeCoord[1]}&appid=` + WEATHER_API_KEY + "&units=metric"
    let response = await axios.get(weather_endpoint)
    
    let status = response.data.weather[0].main
    let temperature = response.data.main.temp.toFixed(1)
    let min_temp = response.data.main.temp_min
    let max_temp = response.data.main.temp_max
    let temp_feels = response.data.main.feels_like
    let weatherIcon = iconLink + `${response.data.weather[0].icon}@2x.png`
    console.log(weatherIcon)
    let tempArr = [status , temperature , min_temp , max_temp , temp_feels , weatherIcon]

    let weatherReport = 
    `
    <div class="accordion" id="accordionExample">
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                    aria-expanded="true" aria-controls="collapseOne">
                    Average Temperature
                </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                data-bs-parent="#accordionExample">
                <div class="accordion-body" style="background-color:#E0E0E0">
                    <strong><h1>${tempArr[1]}\u2103</h1></strong> 
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Weather Conditions
                </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample">
                <div class="accordion-body" style="background-color:#E0E0E0">
                    <strong><h2>${tempArr[0]} <img src = "${weatherIcon}"/></h2></strong> 
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Temeprature Range
                </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                data-bs-parent="#accordionExample">
                <div class="accordion-body" style="background-color:#E0E0E0">
                    <table class="table table-striped table-dark">
                        <tbody>
                            <tr>
                                <th scope="row">Lowest</th>
                                <td>${tempArr[2].toFixed(1)}\u2103</td>
                            </tr>
                            <tr>
                                <th scope="row">Highest</th>
                                <td>${tempArr[3].toFixed(1)}\u2103</td>
                            </tr>
                            <tr>
                                <th scope="row">Feels Like</th>
                                <td>${tempArr[4].toFixed(1)}\u2103</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    `
    return weatherReport
}
