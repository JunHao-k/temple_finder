const sgLat = 1.3521
const sgLng = 103.8198

let createMap = (lat , lng) => {
    let map = L.map("map")
    map.setView([lat , lng] , 13)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
    }).addTo(map); 
    return map
}

// let init = () => {
//     let map = createMap(sgLat , sgLng);

//     window.addEventListener('DOMContentLoaded' , async () => {
    
//         let templeLayer = L.layerGroup()
//         templeLayer.addTo(map)
//         let getTempleCluster = await showAllTemples()
//         getTempleCluster.addTo(templeLayer)

//         let yueLaoLayer = L.layerGroup()
//         let getYueLaoMarker = yueLaoMarker();
//         getYueLaoMarker.addTo(yueLaoLayer)

//         let baseLayers = {
//             "Show all temples": templeLayer,
//             "For Relationships": yueLaoLayer
//         }

//         L.control.layers(baseLayers , {}).addTo(map)
//     })
// }