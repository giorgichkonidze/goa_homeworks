function getDayOfTheWeek(date){
    const realDate = new Date(date)
    return realDate.getDay()
}
console.log(getDayOfTheWeek("2025-05-28"))