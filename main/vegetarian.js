let findVegetarian = async (lat , lng , chi , eng) => {
    let nearbyVeg = await searchFourSquare(lat , lng , "vegetarian" , 13377)
    
    let vegLayer = L.layerGroup()
    let temple_layer = baseLayers["Show all temples"]
    
    if(map.hasLayer(temple_layer)){
        map.removeLayer(temple_layer)
        map.addLayer(vegLayer)
        baseLayers["with veggies"] = vegLayer
    }

    let targetTempleIcon = generateIcon('../images/chineseTemple.png')
    let status_arr = getWeatherData([lat , lng])

    let targetTemple = L.marker([lat , lng] , {icon: targetTempleIcon}).bindPopup(`
        <div>
            <h1>${chi}</h1>
            <h2>${eng}</h2>
        </div>
        <div>
            <h1>${status_arr[1]}</h1>
            <h2>${status_arr[0]}</h2>
            <table>
                <tr>Highest: ${status_arr[3]}</tr>
                <tr>Lowest: ${status_arr[2]}</tr>
                <tr>Feels like: ${status_arr[4]}</tr>
            </table>
        </div>
        
        
    `).addTo(vegLayer)

    // console.log(nearbyVeg.results)
    for(vegLocation of nearbyVeg.results){

        let vegIcon = generateIcon('../images/veg.png')

        let vegLat = vegLocation.geocodes.main.latitude
        let vegLng = vegLocation.geocodes.main.longitude
        let address = `<h1>${vegLocation.name}</h1>
        <p>
            ${vegLocation.location.address} 
            ${vegLocation.location.address_extended ? vegLocation.location.address_extended : ""} 
            ${vegLocation.location.postcode ? vegLocation.location.postcode : ""}
        </p>`

        let thisVegRest = L.marker([vegLat,vegLng] , {icon: vegIcon}).bindPopup(address)

        thisVegRest.addTo(vegLayer)
    }
}