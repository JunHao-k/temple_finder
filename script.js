
// init()

let map = createMap(sgLat , sgLng);

window.addEventListener('DOMContentLoaded' , async () => {
    
    let templeLayer = L.layerGroup()
    templeLayer.addTo(map)
    let getTempleCluster = await showAllTemples()
    getTempleCluster.addTo(templeLayer)

    let yueLaoLayer = L.layerGroup()
    let getYueLaoMarker = yueLaoMarker();
    getYueLaoMarker.addTo(yueLaoLayer)

    let baseLayers = {
        "Show all temples": templeLayer,
        "For Relationships": yueLaoLayer
    }

    L.control.layers(baseLayers , {}).addTo(map)
})

