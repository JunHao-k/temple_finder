
let showAllTemples = async () => {
    let response = await axios.get('./data/templeList.json')
    let templeList = response.data
    
    let templeCluster = L.markerClusterGroup();
    
    for(i = 0; i < 350; i++){
        let templeCoordinates = [templeList[String(i)].lat , templeList[String(i)].lng]
        let chinese_name = templeList[String(i)].chiName 
        let english_name = templeList[String(i)].engName 
        
        let templeMarker = L.marker(templeCoordinates).addEventListener('click' , 
        () => {findVegetarian(templeCoordinates[0] , templeCoordinates[1])})
        
        // templeMarker.addEventlistener('click' , () => {
        //    alert("Testing123")
        // })
        templeMarker.bindPopup(`
            <h1>${chinese_name}</h1>
            <h2>${english_name}</h2>
        `)
        
        templeMarker.addTo(templeCluster)
    }
    
    return templeCluster
}
