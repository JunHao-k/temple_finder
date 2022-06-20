window.addEventListener('DOMContentLoaded' , async () => {

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

    let clearRoutebtn = document.querySelector("#clear-route")
    clearRoutebtn.addEventListener('click' , () => {
        removeRoute()
    })

    
    
    

    L.control.layers(baseLayers , {}).addTo(map)
})






