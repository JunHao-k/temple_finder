window.addEventListener('DOMContentLoaded' , async () => {

    let getAllTemples = await showAllTemples()
    // let getYueLaoLayer = showYueLao()

    baseLayers = controlLayers(getAllTemples[1] , getAllTemples[0] , baseLayers)
    // baseLayers = controlLayers(getYueLaoLayer[1] , getYueLaoLayer[0] , baseLayers)

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

    L.control.layers(baseLayers , {}).addTo(map)
})






