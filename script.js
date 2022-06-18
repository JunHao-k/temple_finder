// let map = createMap(sgLat , sgLng);

window.addEventListener('DOMContentLoaded' , async () => {
    
    // let templeLayer = L.layerGroup()
    // templeLayer.addTo(map)
    // let getTempleCluster = await showAllTemples()
    // getTempleCluster.addTo(templeLayer)

    
    // let yueLaoLayer = L.layerGroup()
    // let getYueLaoMarker = yueLaoMarker();
    // getYueLaoMarker.addTo(yueLaoLayer)
    
    // L.control.layers(baseLayers, {}).addTo(map)

    let getAllTemples = await showAllTemples()
    // let getYueLaoLayer = showYueLao()

    baseLayers = controlLayers(getAllTemples[1] , getAllTemples[0] , baseLayers)
    // baseLayers = controlLayers(getYueLaoLayer[1] , getYueLaoLayer[0] , baseLayers)

    L.control.layers(baseLayers , {}).addTo(map)

    // let geoData = await geoCode("address" , "457 Ang Mo Kio ave10")
    // let geoData = await geoCode("postcode" , 560457)

    // console.log(geoData)
})






