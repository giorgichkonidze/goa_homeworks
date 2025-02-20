let result = 1
for(let i = 1; i <= 10000; i++) {
    result *= i

    if (result > 10000) {
        console.log('breaking the loop at', i);
        break;

    }
}
console.log(result)