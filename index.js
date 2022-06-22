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

// let styleFunction = (bgColor , fontColor , border_radius , margin , padding , htmlElement) => {
//     htmlElement.style.backgroundColor = bgColor
//     htmlElement.style.color = fontColor
//     htmlElement.style.borderRadius = border_radius
//     htmlElement.style.margin = margin
//     htmlElement.style.padding = padding
// }

// let email = document.querySelector("#form5Example2").value
// let isEmailError = false
// let emailError = ""
// let isErrorCreated = false;

// emailError = "The email is invalid"
// let temp = document.createElement('p')
// temp.innerHTML = emailError
// temp.setAttribute("id" , "emailErrorMsg")
// document.querySelector('#email').appendChild(temp)
// styleFunction("pink" , "red" , "20px" , "1em" , "1em" , temp)

// if(email.includes('@') == false && email.includes('.') == false){
//     isEmailError = true
// }

// if(isEmailError){
//     document.querySelector('#emailErrorMsg').style.display = "block"
// }


