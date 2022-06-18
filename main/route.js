
let routeBtn = document.querySelector("#routeSubmit")
let routingControl = null
let removeRoute = () => {
    if (routingControl !== null) {
        map.removeControl(routingControl);
        routingControl = null;
    }
}

routeBtn.addEventListener('click' , async () => {
    
    removeRoute()
    
    let current = document.querySelector("#start").value
    let destination = document.querySelector("#end").value 
    
    let [currentArr, destinationArr] = await Promise.all([geoCode("postcode" , current), geoCode("postcode" , destination)])

    console.log(currentArr)
    console.log(destinationArr)

    if(currentArr.length == 0 || destinationArr.length == 0){
        alert("Please enter a valid postal code")
    }

    let currentLatLng = currentArr[0].center
    let destinationLatLng = destinationArr[0].center

    let [c_lat , c_lng] = [currentLatLng[1] , currentLatLng[0]]
    let [d_lat , d_lng] = [destinationLatLng[1] , destinationLatLng[0]]

    routingControl = L.Routing.control({
    waypoints: [
            L.latLng(c_lat, c_lng),
            L.latLng(d_lat , d_lng)
        ]
    })

    routingControl.addTo(map)
})








