const isPrime = num => {
    if(num <= 1) return false
    for (let i = 2; i <= Math.sqrt(num); i++){
        if (num % i === 0) return false
    }
    return true
}
console.log(isPrime(2))
console.log(isPrime(20))
console.log(isPrime(10))