
let recordedVegLayers = []


let findVegetarian = async (coorArr) => {

    // Zoom out to show a bigger picture of surroundings
    map.flyTo(coorArr , 13)

    let lat = coorArr[0]
    let lng = coorArr[1]
    let nearbyVeg = await searchFourSquare(lat, lng, "vegetarian", 13377)

    let vegLayer = L.layerGroup()
    vegLayer.addTo(baseLayers["Show-all-temples"])
    for (vegLocation of nearbyVeg.results) {

        let vegIcon = generateIcon('../images/veg.png')
        console.log(vegLocation)
        let vegLat = vegLocation.geocodes.main.latitude
        let vegLng = vegLocation.geocodes.main.longitude
        let address = 
        `
        <div id = "veg-popup-container">
            <h1 id = "vegName">${vegLocation.name}</h1>
            <ol class="list-group list-group-numbered">
                <li class="list-group-item d-flex justify-content-between align-items-start">
                    <div class="ms-2 me-auto">
                        <div class="fw-bold">Address</div>
                            ${vegLocation.location.address}
                        </div>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-start">
                    <div class="ms-2 me-auto">
                        <div class="fw-bold">Extended Address</div>
                            ${vegLocation.location.address_extended ? vegLocation.location.address_extended : "No extended address"} 
                        </div>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-start">
                    <div class="ms-2 me-auto">
                    <div class="fw-bold">Postal Code</div>
                        ${vegLocation.location.postcode ? vegLocation.location.postcode : "No Postal Code available"}
                    </div>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-start">
                    <div class="ms-2 me-auto">
                    <div class="fw-bold">Distance from temple in kilometers</div>
                        ${((vegLocation.distance)/1000).toFixed(2)}
                    </div>
                </li>
            </ol>
        </div>        
       `

        let thisVegRest = L.marker([vegLat, vegLng], { icon: vegIcon }).bindPopup(address, {
            minWidth: 400
        })
        thisVegRest.addTo(vegLayer)
        // document.querySelector("#removal-container").style.display = "block"
    }
    recordedVegLayers.push(vegLayer)
}
