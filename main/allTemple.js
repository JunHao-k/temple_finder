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
        
        //[status , temperature , min_temp , max_temp , temp_feels]
        // let status, temperature, minTemp , maxTemp , tempFeels;
        //let status_arr = await getWeatherData(templeCoordinates)
        // console.log(status_arr)
        // [status , temperature, minTemp , maxTemp , tempFeels] = status_arr
        // console.log(status_arr)
        let templeMarker = L.marker(templeCoordinates , {icon: templeIcon}).bindPopup(`
            <div>
                <h1>${chinese_name}</h1>
                <h2>${english_name}</h2>
            </div>
            
        `)

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
        
        templeMarker.addEventListener('click' , () => {
            findVegetarian(templeCoordinates[0] , templeCoordinates[1] , chinese_name , english_name)
            if(map.hasLayer(baseLayers["with veggies"])){
                baseLayers["with veggies"].clearLayers()
            }
        }) 

        
        templeMarker.addTo(templeCluster)
    }
    templeCluster.addTo(templeLayer)
    return [templeLayer , "Show all temples"]
}
