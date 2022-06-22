const GEO_API_URL = "https://api.mapbox.com/geocoding/v5/mapbox.places/"
const ACCESS_KEY = "pk.eyJ1Ijoiamhhb2tvaCIsImEiOiJjbDRqbG9iOXYwY3dvM2ptaHk2MWxvN3dzIn0.6CJmBjRm7O_FCq6fnHtBDw"

let geoCode = async (searchType , searchValue) => {
    let geo_endpoint = ""
    let accessKeyStr = `access_token=${ACCESS_KEY}`
    
    let type = `types=${searchType}&`
    let valuePost = `${searchValue}.json?country=sg&`
    
    if(searchType === "postcode"){
        geo_endpoint = GEO_API_URL + valuePost + type + accessKeyStr
    }
    else{
        geo_endpoint = GEO_API_URL + valuePost + accessKeyStr
    }    

    // console.log(geo_endpoint)
    let response = await axios.get(geo_endpoint)
    return response.data.features
}

