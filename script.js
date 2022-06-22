window.addEventListener('DOMContentLoaded' , async () => {

    let queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString);
    if(urlParams.get('lat') && urlParams.get('lng')){
        let specifiedLat = urlParams.get('lat')
        let specifiedLng = urlParams.get('lng')
        if(specifiedLat != "" || specifiedLng != ""){
            map.flyTo([specifiedLat , specifiedLng] , 19)
            let greenCircles = L.layerGroup();
            L.circle([specifiedLat , specifiedLng] , {
                radius: 40,
                color: "green"
            }).addTo(greenCircles)
            greenCircles.addTo(map)
        }
    }
    

    let getAllTemples = await showAllTemples()

    baseLayers = controlLayers(getAllTemples[1] , getAllTemples[0] , baseLayers)

    let clearVegbtn = document.querySelector("#clear-veg")
    clearVegbtn.addEventListener('click' , () => {
        if(recordedVegLayers.length !== 0){
            for(layer of recordedVegLayers){
                baseLayers["Show-all-temples"].removeLayer(layer)
            }
            recordedVegLayers = []
        }
    })

    let clearMrtbtn = document.querySelector("#clear-mrt")
    clearMrtbtn.addEventListener('click' , () => {
        if(recordedMrtLayers.length !== 0){
            for(layer of recordedMrtLayers){
                baseLayers["Show-all-temples"].removeLayer(layer)
            }
            recordedMrtLayers = []
        }
    })
    
    L.control.layers(baseLayers , overlays).addTo(map)
})






