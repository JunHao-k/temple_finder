let showAllTemples = async () => {
    let response = await axios.get('./data/templeList.json')
    let templeList = response.data
    
    let templeLayer = L.layerGroup()
    templeLayer.addTo(map)

    let templeCluster = L.markerClusterGroup();

    let templeIcon = generateIcon('../images/chineseTemple.png')

    let createButton = (func , argArr , btnName) => {
        let div = document.createElement('div')
        let addOn = null
        div.innerHTML = `
            <button>${btnName}</button>
        `
        div.querySelector('button').addEventListener('click', function(){
            addOn = func(argArr)
        });
        if(addOn != null){
            div.appendChild(addOn)
        }
        return div
    }

    for(i = 0; i < 350; i++){
        let templeCoordinates = [templeList[String(i)].lat , templeList[String(i)].lng]
        let chinese_name = templeList[String(i)].chiName 
        let english_name = templeList[String(i)].engName 
        
        let vegDiv = createButton(findVegetarian , templeCoordinates , "Show nearby vegetarian eatery")
        let weatherDiv = createButton(getWeatherData , templeCoordinates , "Weather Forecast")
        //console.log(weatherDiv)

        let popupDiv = document.createElement('div')
        popupDiv.innerHTML = `
            <div>
                <h1>${chinese_name}</h1>
                <h2>${english_name}</h2>
            </div>
        `
        popupDiv.appendChild(vegDiv)
        popupDiv.append(weatherDiv)
        
        let templeMarker = L.marker(templeCoordinates , {icon: templeIcon}).bindPopup(popupDiv)

        
        // templeMarker.addEventListener('click' , () => {
        //     // findVegetarian(templeCoordinates[0] , templeCoordinates[1] , chinese_name , english_name)
        //     // if(map.hasLayer(baseLayers["with-veggies"])){
        //     //     baseLayers["with-veggies"].clearLayers()
        //     // }
        // }) 

        
        templeMarker.addTo(templeCluster)
    }
    templeCluster.addTo(templeLayer)
    return [templeLayer , "Show-all-temples"]
}
