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

let baseLayers = {
    // "Show all temples": inputLayer,
    // "For Relationships": inputlayer
}

let controlLayers = (layerTitle , inputLayer , base) => {
    
    // let getLayer = inputLayer
    // let getYueLaoLayer = inputLayer
    base[layerTitle] = inputLayer
    return base
}



