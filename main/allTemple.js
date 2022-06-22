let showAllTemples = async () => {
    let response = await axios.get('../data/temple_list.json')
    let templeList = response.data
    
    let templeLayer = L.layerGroup()
    templeLayer.addTo(map)

    let templeCluster = L.markerClusterGroup();

    let templeIcon = generateIcon('../images/chineseTemple.png')

    let createButton = (func , argArr , btnName) => {
        let div = document.createElement('div')

        div.innerHTML = `
            <button class = "btn btn-outline-success">${btnName}</button>
        `

        div.querySelector('button').addEventListener('click', function(){
            func(argArr)
        });
        return div
    }
    // let showMrt = showMrt()
    for(i = 0; i < 350; i++){
        let templeCoordinates = [templeList[String(i)].lat , templeList[String(i)].lng]
        let chinese_name = templeList[String(i)].chiName 
        let english_name = templeList[String(i)].engName 
        
        let vegDiv = createButton(findVegetarian , templeCoordinates , "Show nearby vegetarian eatery")
        let weatherDiv = document.createElement('div')
        let mrtDiv = createButton(showMrt , templeCoordinates , "Show nearby MRT stations")
        
        let popupDiv = document.createElement('div')
        popupDiv.innerHTML = `
            <div id = "pop-up-div">
                <div id = "temple-popup-name">
                    <h1 class="chiName">${chinese_name}</h1>
                    <h2 class="engName">${english_name}</h2>
                </div>
            </div>
        `

        let templeMarker = L.marker(templeCoordinates , {icon: templeIcon}).bindPopup(popupDiv , {
            minWidth: 600
        })

        templeMarker.addEventListener('click' , async () => {
            weatherDiv.innerHTML = await getWeatherData(templeCoordinates)
            map.flyTo([templeCoordinates[0] , templeCoordinates[1]] , 15)
            L.circle(templeCoordinates , {
                radius: 500,
                color: "yellow"
            }).addTo(yellowCircle).addTo(map)

        }) 
        
        // Create Div to hold both popup temple image div and accordian div
        let infoDiv = document.createElement('div')
        infoDiv.setAttribute('id' , 'info-container')
        infoDiv.appendChild(weatherDiv)

        let temple_popup_imgdiv = document.createElement('div')
        let popupImage = document.createElement('img')
        popupImage.setAttribute('class' , 'temple-popup-img')
        popupImage.src = "../images/temple_marker_pict.jpg"
        temple_popup_imgdiv.appendChild(popupImage)
        infoDiv.appendChild(temple_popup_imgdiv)
        popupDiv.appendChild(infoDiv)

        let vegmrtbtnDiv = document.createElement('div')
        vegmrtbtnDiv.setAttribute('class' , 'temple-popup-btngroup')

        vegmrtbtnDiv.appendChild(vegDiv)
        vegmrtbtnDiv.appendChild(mrtDiv)
        
        popupDiv.appendChild(vegmrtbtnDiv)

        templeMarker.addTo(templeCluster)
    }
    templeCluster.addTo(templeLayer)
    return [templeLayer , "Show-all-temples"]
}
