let showMrt = async (templeCoord) => {
    let response = await axios.get('../data/mrtsg.json')
    // getDist = (t_lat , t_lng , areaLat , areaLng)
    for(mrt of response.data){
        let temp = {}
        let mrtLat = mrt.Latitude
        let mrtLng = mrt.Longitude
        let distance = getDist(templeCoord[0] , templeCoord[1] , mrtLat , mrtLng)
        if(distance < 2){
            temp.station = mrt.STN_NAME
            temp.num
        }
    }
}