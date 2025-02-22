function factorial(n){
    result = n;
    for(let i = 1; i < n; i++){
        result *= n - i;
    };
    console.log(result);
}

factorial(5);