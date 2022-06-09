let findVegetarian = async (lat , lng) => {
    let nearbyVeg = await searchFourSquare(lat , lng , "vegetarian")
    console.log(nearbyVeg)
}