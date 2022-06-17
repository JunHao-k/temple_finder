let showMrt = async (templeCoord) => {
    let response = await axios.get('../data/mrtsg.json')
    // getDist = (t_lat , t_lng , areaLat , areaLng)
    let mrtList = []
    let mrtLayer = L.layerGroup()
    let mrtIcon = generateIcon('../images/train.png')
    for(mrt of response.data){
        let temp = {}
        let mrtLat = mrt.Latitude
        let mrtLng = mrt.Longitude
        let distance = getDist(templeCoord[0] , templeCoord[1] , mrtLat , mrtLng)
        console.log(distance)
        if(distance < 2){
            temp.station = mrt.STN_NAME
            temp.num = mrt.STN_NO
            temp.lat = mrt.Latitude
            temp.lng = mrt.Longitude
            temp.colour = mrt.COLOR
            mrtList.push(temp)
        }
    }
    for(chosenMrt of mrtList){
        let mrtAddress = `<h1>${chosenMrt.station}</h1>
        <p>
            ${chosenMrt.num} 
        </p>`
        let thisMRT = L.marker([chosenMrt.lat , chosenMrt.lng] , {icon: mrtIcon}).bindPopup(mrtAddress)
        thisMRT.addTo(mrtLayer)
        mrtLayer.addTo(baseLayers["Show-all-temples"])
    }
}