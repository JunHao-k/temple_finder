let routeBtn = document.querySelector("#routeSubmit")

let routingControl = null

let styleFunction = (bgColor , fontColor , border_radius , margin , padding , fontSize , htmlElement) => {
    htmlElement.style.backgroundColor = bgColor
    htmlElement.style.color = fontColor
    htmlElement.style.borderRadius = border_radius
    htmlElement.style.margin = margin
    htmlElement.style.padding = padding
    htmlElement.style.fontSize = fontSize
}

let removeRoute = () => {
    if (routingControl !== null) {
        map.removeControl(routingControl);
        routingControl = null;
    }
}
let errorMsgCreated = false
let createStartErrorMsg = () => {
    let errorMessage = "Please enter a valid postal code for starting position"
    let temp = document.createElement('p')
    temp.innerHTML = errorMessage
    temp.setAttribute("id","startError")
    document.querySelector('#startInput').appendChild(temp)
    styleFunction("pink" , "red" , "20px" , "5px" , "5px" , "10px" , temp)
}

let createEndErrorMsg = () => {
    let errorMessage = "Please enter a valid postal code for destination"
    let temp = document.createElement('p')
    temp.innerHTML = errorMessage
    temp.setAttribute("id","endError")
    document.querySelector('#endInput').appendChild(temp)
    styleFunction("pink" , "red" , "20px" , "5px" , "5px" , "10px" , temp)
}

routeBtn.addEventListener('click' , async () => {
    
    removeRoute()
    // I just need to create the error message once and toggle it on or off with correct/wrong input
    if(errorMsgCreated == false){
        createStartErrorMsg()
        createEndErrorMsg()
        errorMsgCreated = true
    }
    let validStartPostal = true
    let validEndPostal = true

    let startErrorDisplay = document.querySelector("#startError")
    let endErrorDisplay = document.querySelector("#endError")
    
    let current = document.querySelector("#start").value
    let destination = document.querySelector("#end").value 
    
    let [currentArr, destinationArr] = await Promise.all([geoCode("postcode" , current), geoCode("postcode" , destination)])

    
    if(currentArr.length == 0){
        
        validStartPostal = false
    }
    if(destinationArr.length == 0){
        
        validEndPostal = false
    }

    if(validStartPostal == true){
        startErrorDisplay.style.display = "none"
    }
    else{
        startErrorDisplay.style.display = "block"
    }

    if(validEndPostal == true){
        endErrorDisplay.style.display = "none"
    }
    else{
        endErrorDisplay.style.display = "block"
    }
    
    let currentLatLng = currentArr[0].center ? validStartPostal : 0
    let destinationLatLng = destinationArr[0].center ? validEndPostal : 0

    let [c_lat , c_lng] = [currentLatLng[1] , currentLatLng[0]]
    let [d_lat , d_lng] = [destinationLatLng[1] , destinationLatLng[0]]

    routingControl = L.Routing.control({
    position: 'topleft',
    lineOptions: {
        styles: [
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