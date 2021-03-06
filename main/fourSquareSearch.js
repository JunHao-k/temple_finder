const BASE_API_URL = "https://api.foursquare.com/v3/"
const API_KEY = "fsq3orP8trDpHLcjrds85AizqLEHPK59fbQtHxrpIDKUuKQ="

let searchFourSquare = async (lat , lng , query , categoryNum) => {
    endpoint = BASE_API_URL + "places/search"
    let response = await axios.get(endpoint , {
        'params':{
            'll': String(lat) + "," + String(lng),
            'query': query,
            'radius': 3000,
            'categories': String(categoryNum),
            'limit': 10
        },
        'headers':{
            'Accept': 'application/json', 
            'Authorization': API_KEY
        }
    })
    return response.data
}