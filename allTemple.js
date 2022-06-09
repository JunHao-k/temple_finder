
let showAllTemples = async () => {
    let response = await axios.get('./data/templeList.json')
    let templeList = response.data
    let map = createMap(sgLat , sgLng)
    let templeLayer = L.layerGroup()


    let templeCluster = L.markerClusterGroup();
    templeCluster.addTo(templeLayer)
    
    for(i = 0; i < 350; i++){
        let templeCoordinates = [templeList[String(i)].lat , templeList[String(i)].lng]
        let chinese_name = templeList[String(i)].chiName 
        let english_name = templeList[String(i)].engName 
        
        let templeMarker = L.marker(templeCoordinates)
        templeMarker.bindPopup(`
            <h1>${chinese_name}</h1>
            <h2>${english_name}</h2>
        `)
        templeMarker.addTo(templeCluster)
        
    }
    let baseLayers = {
        "Show temples": templeLayer
    }
    return map
}
