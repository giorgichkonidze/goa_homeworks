function calculateSum(n) {
  let sum = 0;
  switch (n) {
    case n:
      for (let i = 1; i <= n; i++) {
        sum += i;
      }
      break;
    default:
      sum = 0;
      break;
  }
  return sum;
}
console.log(calculateSum(6)); 
console.log(calculateSum(20));