let search = document.querySelector("#searchBtn")
let errMsg = createSearchErrorMsg()
let isError = false
let isErrorMsgReady = false


search.addEventListener("click", async () => {
    let num = document.querySelector("#search-bar").value
    let latlngArr = await geoCode("postcode", num)
    if (latlngArr.length == 0) {
        isError = true
    }
    else {
        isError = false
    }

    if (isError) {
        if (!isErrorMsgReady) {
            document.querySelector("#searchInput").appendChild(errMsg)
        }
        document.querySelector("#searchError").style.display = "block"
    }
    else {
        document.querySelector("#searchError").style.display = "none"
    }
})





// let showYueLao = () => {
    
//     let yueLaoLayer = L.layerGroup()

//     let yueLaoMarker = L.marker([1.284284 , 103.849579]).bindPopup(`
//         <h1>粤海清庙</h1>
//         <h2>Yueh Hai Ching Temple</h2>
//     `).addTo(yueLaoLayer)

//     return [yueLaoLayer , "For Relationships"]
// }

