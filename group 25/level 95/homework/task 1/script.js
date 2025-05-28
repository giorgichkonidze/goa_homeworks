function LeapYear(year) {
    if(year % 4 !== 0) {
        return "Not a leap year"
    } else if (year % 4 === 0 && year % 100 === 0 && year % 400!==0){
        return "not a leap year"
    } else {
        return "leap year"
    }
}

console.log(LeapYear(2000))
console.log(LeapYear(2100))