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

let recordedInnerLayers = []
let baseLayers = {}

let redCircle = L.layerGroup()
let overlays = {
    "Red Circles": redCircle,
}

let controlLayers = (layerTitle , inputLayer , base) => {
    base[layerTitle] = inputLayer
    return base
}




