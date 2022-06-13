let showAllTemples = async () => {
    let response = await axios.get('./data/templeList.json')
    let templeList = response.data
    
    let templeLayer = L.layerGroup()
    templeLayer.addTo(map)

    let templeCluster = L.markerClusterGroup();

    let templeIcon = generateIcon('../images/chineseTemple.png')

    
    for(i = 0; i < 350; i++){
        let templeCoordinates = [templeList[String(i)].lat , templeList[String(i)].lng]
        let chinese_name = templeList[String(i)].chiName 
        let english_name = templeList[String(i)].engName 
        
        let templeMarker = L.marker(templeCoordinates , {icon: templeIcon}).addEventListener('click' , () => {
            findVegetarian(templeCoordinates[0] , templeCoordinates[1] , chinese_name , english_name)
            if(map.hasLayer(baseLayers["with veggies"])){
                baseLayers["with veggies"].clearLayers()
            }
        }) 

        templeMarker.bindPopup(`
            <h1>${chinese_name}</h1>
            <h2>${english_name}</h2>
        `)
        
        templeMarker.addTo(templeCluster)
    }
    templeCluster.addTo(templeLayer)
    return [templeLayer , "Show all temples"]
}
