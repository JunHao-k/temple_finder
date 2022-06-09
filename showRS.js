let showYueLao = () => {
    
    let yueLaoLayer = L.layerGroup()

    let yueLaoMarker = L.marker([1.284284 , 103.849579]).bindPopup(`
        <h1>粤海清庙</h1>
        <h2>Yueh Hai Ching Temple</h2>
    `).addTo(yueLaoLayer)

    return yueLaoLayer
}

