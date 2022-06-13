let findVegetarian = async (lat , lng , chi , eng) => {
    let nearbyVeg = await searchFourSquare(lat , lng , "vegetarian")
    
    let vegLayer = L.layerGroup()
    let temple_layer = baseLayers["Show all temples"]
    
    if(map.hasLayer(temple_layer)){
        map.removeLayer(temple_layer)
        map.addLayer(vegLayer)
        baseLayers["with veggies"] = vegLayer
    }

    let targetTempleIcon = generateIcon('../images/chineseTemple.png')
    let targetTemple = L.marker([lat , lng] , {icon: targetTempleIcon}).bindPopup(`
        <h1>${chi}</h1>
        <h2>${eng}</h2>
    `).addTo(vegLayer)

    console.log(nearbyVeg.results)
    for(vegLocation of nearbyVeg.results){

        let vegIcon = generateIcon('../images/veg.png')

        let vegLat = vegLocation.geocodes.main.latitude
        let vegLng = vegLocation.geocodes.main.longitude
        L.marker([vegLat,vegLng] , {icon: vegIcon}).addTo(vegLayer)
    }
}