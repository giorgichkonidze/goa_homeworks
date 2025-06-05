function generatNumbers(n){
    let numbers = []
    for (let i = 0; i < n; i++) {
        numbers_sum += Math.floor(Math.random()*100)
    }
    return numbers_sum/n

}

console.log(generatNumbers(15))