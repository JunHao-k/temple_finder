let findVegetarian = async (lat , lng) => {
    let nearbyVeg = await searchFourSquare(lat , lng , "vegetarian")
    
    console.log(nearbyVeg)
    for(vegLocation of nearbyVeg.results){
        let vegLat = vegLocation.geocodes.main.latitude
        let vegLng = vegLocation.geocodes.main.longitude
     
        L.marker([vegLat,vegLng]).addTo(map)
    }
}