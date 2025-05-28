function calculate(year) {
   
    century = Math.ceil(year / 100)
    return century
}

year = 1993
console.log(calculate(year))