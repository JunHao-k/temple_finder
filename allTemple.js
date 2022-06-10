let showAllTemples = async () => {
    let response = await axios.get('./data/templeList.json')
    let templeList = response.data
    
    let templeLayer = L.layerGroup()
    templeLayer.addTo(map)

    let templeCluster = L.markerClusterGroup();

    let templeIcon = L.icon({
        iconUrl: './data/chineseTemple.png',
        iconSize:     [38, 50], // size of the icon
        iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
        popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });
    
    for(i = 0; i < 350; i++){
        let templeCoordinates = [templeList[String(i)].lat , templeList[String(i)].lng]
        let chinese_name = templeList[String(i)].chiName 
        let english_name = templeList[String(i)].engName 
        
        let templeMarker = L.marker(templeCoordinates , {icon: templeIcon}).addEventListener('click' , 
        () => {findVegetarian(templeCoordinates[0] , templeCoordinates[1])}) 
        
        templeMarker.bindPopup(`
            <h1>${chinese_name}</h1>
            <h2>${english_name}</h2>
        `)
        
        templeMarker.addTo(templeCluster)
    }
    templeCluster.addTo(templeLayer)
    return templeLayer
}
