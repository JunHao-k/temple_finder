let recordedMrtLayers = []

let showMrt = async (templeCoord) => {

    // Zoom out to show a bigger picture of surroundings
    // map.flyTo(templeCoord , 13)
    
    let response = await axios.get('../data/mrtsg.json')
    let mrtList = []
    let mrtLayer = L.layerGroup()
    mrtLayer.addTo(baseLayers["Show-all-temples"])


    let mrtIcon = generateIcon('../images/train.png')
    for(mrt of response.data){
        let temp = {}
        let mrtLat = mrt.Latitude
        let mrtLng = mrt.Longitude
        let distance = getDist(templeCoord[0] , templeCoord[1] , mrtLat , mrtLng)

        if(distance < 2){
            temp.station = mrt.STN_NAME
            temp.num = mrt.STN_NO
            temp.lat = mrt.Latitude
            temp.lng = mrt.Longitude
            temp.colour = mrt.COLOR
            mrtList.push(temp)
        }
    }// ${chosenMrt.colour}
    for(chosenMrt of mrtList){
        let mrtAddress = 
        `
        <div id = "mrt-popup-container">
            <h3>${chosenMrt.station}</h3>

            <div class="separator small left" style="background-color: #494949;"></div>

            <div id = "station-info">
                <div>
                    <ul class="list-group">
                        <li class="list-group-item">${chosenMrt.num}</li>

                        <li class="list-group-item" style = "background-color: ${chosenMrt.colour}; 
                        opacity: 0.8; height: 50px; width: 100%"></li>

                    </ul>
                </div>
                <div> 
                    <img src = "../images/sg_metro.png" id = "mrt-symbol"/> 
                </div>
            </div>
        </div>    
        `
        let thisMRT = L.marker([chosenMrt.lat , chosenMrt.lng] , {icon: mrtIcon}).bindPopup(mrtAddress , {
            minWidth: 400
        })
        thisMRT.addTo(mrtLayer)
    }
    recordedMrtLayers.push(mrtLayer)
    
}