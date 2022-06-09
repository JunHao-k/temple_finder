
window.addEventListener('DOMContentLoaded' , async () => {
    let map = createMap();

    let baseLayers = {
        "Show all temples": templeLayer,
        "For Relationships": rsTemple
    }

    L.control.layers(baseLayers , {}).addTo(map)
})