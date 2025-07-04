const checkNum = num => 
    num > 0 ? "positive" :
    num < 0 ? "negative" :
    "zero"
    
console.log(checkNum(5))
console.log(checkNum(0))
console.log(checkNum(-4))