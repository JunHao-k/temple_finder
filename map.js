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