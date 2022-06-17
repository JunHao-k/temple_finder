let findVegetarian = async (coorArr) => {
    let lat = coorArr[0]
    let lng = coorArr[1]
    let nearbyVeg = await searchFourSquare(lat , lng , "vegetarian" , 13377)
    // let noVeg = ""
    
    // if(nearbyVeg.length == 0){
    //     noVeg = "There are no vegetarian eatery nearby"
    // }
    let vegLayer = L.layerGroup()
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
        vegLayer.addTo(baseLayers["Show-all-temples"])
    }
    // return noVeg
}



    // let temple_layer = baseLayers["Show-all-temples"]
    
    // if(map.hasLayer(temple_layer)){
    //     map.removeLayer(temple_layer)
    //     map.addLayer(vegLayer)
    //     baseLayers["with-veggies"] = vegLayer
    // }

    // let targetTempleIcon = generateIcon('../images/chineseTemple.png')
    // let status_arr = getWeatherData([lat , lng])

    // let text = 
    // `
    // <div>
    //     <h1>${chi}</h1>
    //     <h2>${eng}</h2>
    //     <button ${onClick = alert("btn-test")}><button>
    // </div>
    // `



    // let targetTemple = L.marker([lat , lng] , {icon: targetTempleIcon}).bindPopup(text)
    // targetTemple.bindPopup(btn)
    
    // targetTemple.addTo(vegLayer)

    /*
        <div>
            <h1>${status_arr[1]}</h1>
            <h2>${status_arr[0]}</h2>
            <table>
                <tr>Highest: ${status_arr[3]}</tr>
                <tr>Lowest: ${status_arr[2]}</tr>
                <tr>Feels like: ${status_arr[4]}</tr>
            </table>
        </div>

    */
    