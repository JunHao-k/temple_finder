let cardSelector = document.querySelectorAll(".card")
let latlngRecords = [[1.284284, 103.849579] , [1.300891 , 103.852837] , [1.280916 , 103.847626]]

for(i = 0; i < cardSelector.length; i++){
  let lat = latlngRecords[i][0]
  let lng = latlngRecords[i][1]

  cardSelector[i].addEventListener("click", () => {
    queryStr = `?lat=${lat}&lng=${lng}`
    location.href = "./map.html" + queryStr
    console.log(location.href)
  })
}


