window.addEventListener('DOMContentLoaded' , async () => {

    let getAllTemples = await showAllTemples()
    // let getYueLaoLayer = showYueLao()

    baseLayers = controlLayers(getAllTemples[1] , getAllTemples[0] , baseLayers)
    // baseLayers = controlLayers(getYueLaoLayer[1] , getYueLaoLayer[0] , baseLayers)

    let clearVegbtn = document.querySelector("#clearVeg")
    clearVegbtn.addEventListener('click' , () => {
        if(recordedVegMarkers.length !== 0){
            for(layer of recordedVegMarkers){
                baseLayers["Show-all-temples"].removeLayer(layer)
            }
            recordedVegMarkers = []
        }
    })

    L.control.layers(baseLayers , {}).addTo(map)

    // let geoData = await geoCode("address" , "457 Ang Mo Kio ave10")
    // let geoData = await geoCode("postcode" , 560457)

    // console.log(geoData)
})






