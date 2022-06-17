let showAllTemples = async () => {
    let response = await axios.get('./data/templeList.json')
    let templeList = response.data
    
    let templeLayer = L.layerGroup()
    templeLayer.addTo(map)

    let templeCluster = L.markerClusterGroup();

    let templeIcon = generateIcon('../images/chineseTemple.png')

    let createButton = (func , argArr , btnName) => {
        let div = document.createElement('div')

        div.innerHTML = `
            <button>${btnName}</button>
        `

        div.querySelector('button').addEventListener('click', function(){
            func(argArr)
        });
        return div
    }

    for(i = 0; i < 350; i++){
        let templeCoordinates = [templeList[String(i)].lat , templeList[String(i)].lng]
        let chinese_name = templeList[String(i)].chiName 
        let english_name = templeList[String(i)].engName 
        
        let vegDiv = createButton(findVegetarian , templeCoordinates , "Show nearby vegetarian eatery")
        // let weatherDiv = createButton(getWeatherData , templeCoordinates , "Weather Forecast")
        let weatherDiv = document.createElement('div')

        let popupDiv = document.createElement('div')
        popupDiv.innerHTML = `
            <div>
                <h1 class="chiName">${chinese_name}</h1>
                <h2>${english_name}</h2>
            </div>
        `
        
        let templeMarker = L.marker(templeCoordinates , {icon: templeIcon}).bindPopup(popupDiv)

        templeMarker.addEventListener('click' , async () => {
            weatherDiv.innerHTML = await getWeatherData(templeCoordinates)
        }) 

        popupDiv.append(weatherDiv)
        popupDiv.appendChild(vegDiv)
        
        templeMarker.addTo(templeCluster)
    }
    templeCluster.addTo(templeLayer)
    return [templeLayer , "Show-all-temples"]
}
