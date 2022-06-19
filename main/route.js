
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

    // let startIcon = generateIcon("../images/start.png")
    // let destinationIcon = generateIcon("../images/finish.png")
    
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
    position: 'topleft',
    lineOptions: {
        styles: [
            // { color: '#17a2b8', opacity: 1, weight: 5 }
            {
                color: 'blue',
                opacity: 1,
                weight: 7
            }
        ]
    },
    waypoints: [
            L.latLng(c_lat, c_lng),
            L.latLng(d_lat , d_lng)
        ],
        createMarker: function(i , start , n){
            let marker_icon = null
            
            if(i == 0){
                marker_icon = generateIcon("../images/start.png")
                return L.marker(start.latLng, {
                    draggable: true,
                    bounceOnAdd: false,
                    bounceOnAddOptions: {
                        duration: 1000,
                        height: 800,
                    },
                    icon: marker_icon // here pass the custom marker icon instance
                });
            }
            else if(i == n - 1){
                marker_icon = generateIcon("../images/finish.png")
                return L.marker(start.latLng, {
                    draggable: true,
                    bounceOnAdd: false,
                    bounceOnAddOptions: {
                        duration: 1000,
                        height: 800,
                    },
                    icon: marker_icon // here pass the custom marker icon instance
                });
            }
        },
    })
    routingControl.addTo(map)
})








