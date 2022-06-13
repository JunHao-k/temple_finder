let generateIcon = (filepath) => {
    let icon = L.icon({
        iconUrl: filepath,
        iconSize:     [38, 50], // size of the icon
        iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
        popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });
    return icon
}