let findVegetarian = async (lat , lng , chi , eng) => {
    let nearbyVeg = await searchFourSquare(lat , lng , "vegetarian")
    
    let vegLayer = L.layerGroup()
    let temple_layer = baseLayers["Show all temples"]
    
    if(map.hasLayer(temple_layer)){
        map.removeLayer(temple_layer)
        map.addLayer(vegLayer)
        baseLayers["with veggies"] = vegLayer
    }

    for(vegLocation of nearbyVeg.results){
        L.marker([lat , lng]).bindPopup(`
            <h1>${chi}</h1>
            <h2>${eng}</h2>
        `).addTo(vegLayer)

        let vegLat = vegLocation.geocodes.main.latitude
        let vegLng = vegLocation.geocodes.main.longitude
        L.marker([vegLat,vegLng]).addTo(vegLayer)
    }
}