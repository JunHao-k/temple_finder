
let routeBtn = document.querySelector("#routeSubmit")

routeBtn.addEventListener('click' , async () => {
    
    let current = document.querySelector("#start").value
    let destination = document.querySelector("#end").value 

    let [currentArr, destinationArr] = await Promise.all([geoCode("postcode" , current), geoCode("postcode" , destination)])

    console.log(currentArr)
    console.log(destinationArr)

    if(currentArr.length == 0 || destinationArr.length == 0){
        alert("Please enter a valid postal code")
    }

    let currentLatLng = currentArr[0].center
    let destinationLatLng = currentArr[0].center

    // let routingControl = L.Routing.control({
//     waypoints: [
//         L.latLng(1.3521, 103.8198),
//         L.latLng(1.284284 , 103.849579)
//     ]
// })

// routingControl.addTo(map)
})







