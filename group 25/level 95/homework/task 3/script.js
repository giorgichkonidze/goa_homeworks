function fizzbuzz(list) {
    let fizzes = []
    for (let i = 0; i < list.length; i++){
        if(list[i] % 3 === 0 && list[i] % 5 === 0){
            fizzes.push("fizzbuzz")
        } else if (list[i] % 3=== 0){
            fizzes.push("fizz")
        } else if (list[i] % 5 === 0){
            fizzes.push("buzz")
        }

    }
    return fizzes
}

console.log(fizzbuzz([1,2,3,4,5,6,7,8,9,10,15]))
