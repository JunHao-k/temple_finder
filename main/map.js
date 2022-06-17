let createMap = () => {
    let map = L.map("map")
    map.setView([1.3521 , 103.8198] , 13)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
    }).addTo(map); 
    return map
}
let map = createMap();

let routingControl = L.Routing.control({
    waypoints: [
        L.latLng(1.3521, 103.8198),
        L.latLng(1.284284 , 103.849579)
    ]
})

routingControl.addTo(map)

let baseLayers = {}

let controlLayers = (layerTitle , inputLayer , base) => {
    base[layerTitle] = inputLayer
    return base
}

// L.Routing.control({
//     waypoints: [
//         L.latLng(1.311550, 103.760551),
//         L.latLng(1.284284 , 103.849579)
//     ]
// }).addTo(baseLayers[""]);


