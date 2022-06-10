
// let map = createMap(sgLat , sgLng);

window.addEventListener('DOMContentLoaded' , async () => {
    
    // let templeLayer = L.layerGroup()
    // templeLayer.addTo(map)
    // let getTempleCluster = await showAllTemples()
    // getTempleCluster.addTo(templeLayer)

    
    // let yueLaoLayer = L.layerGroup()
    // let getYueLaoMarker = yueLaoMarker();
    // getYueLaoMarker.addTo(yueLaoLayer)

    let getAllTemples = await showAllTemples()
    let getYueLaoLayer = showYueLao()

    let baseLayers = {
        "Show all temples": getAllTemples,
        "For Relationships": getYueLaoLayer
    }
    L.control.layers(baseLayers , {}).addTo(map)
})






