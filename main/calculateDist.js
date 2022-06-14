
let getDist = (t_lat , t_lng , areaLat , areaLng) => {

    // The math module contains a function
	// named toRadians which converts from
	// degrees to radians.
    t_lat = t_lat * Math.PI / 180;
	t_lng = t_lng * Math.PI / 180;
	areaLat = areaLat * Math.PI / 180;
	areaLng = areaLng * Math.PI / 180;

    // Haversine formula
	let lngDiff = areaLng - t_lng;
	let latDiff = areaLat - t_lat;

	let a = Math.pow(Math.sin(latDiff / 2), 2) + Math.cos(t_lat) * Math.cos(areaLat) * Math.pow(Math.sin(lngDiff / 2),2);
			
	let c = 2 * Math.asin(Math.sqrt(a));
    let r = 6371; // Radius of earth in Kilometers

    return(c * r);
}




// Driver code
		
		// let lat1 = 53.32055555555556;
		// let lat2 = 53.31861111111111;
		// let lon1 = -1.7297222222222221;
		// let lon2 = -1.6997222222222223;
		// document.write(distance(lat1, lat2,
		// 				lon1, lon2) + " K.M");
			

