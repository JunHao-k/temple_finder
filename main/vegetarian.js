
let recordedVegLayers = []


let findVegetarian = async (coorArr) => {
    
    let lat = coorArr[0]
    let lng = coorArr[1]
    let nearbyVeg = await searchFourSquare(lat , lng , "vegetarian" , 13377)

    let vegLayer = L.layerGroup()
    vegLayer.addTo(baseLayers["Show-all-temples"])
    for(vegLocation of nearbyVeg.results){

        let vegIcon = generateIcon('../images/veg.png')
        console.log(vegLocation)
        let vegLat = vegLocation.geocodes.main.latitude
        let vegLng = vegLocation.geocodes.main.longitude
        let address = `<h1>${vegLocation.name}</h1>
        <p>
            ${vegLocation.location.address} 
            ${vegLocation.location.address_extended ? vegLocation.location.address_extended : ""} 
            ${vegLocation.location.postcode ? vegLocation.location.postcode : ""}
        </p>`

        let thisVegRest = L.marker([vegLat,vegLng] , {icon: vegIcon}).bindPopup(address , {
            minWidth: 600
        })
        thisVegRest.addTo(vegLayer)
    }
    recordedVegLayers.push(vegLayer)
}
