function calculateSum(n) {
  let sum = 0;
  switch (true) {
    case n >= 1:
      for (let i = 1; i <= n; i++) {
        sum += i;
      }
      break;
    default:
      sum = 0;
  }
  return sum;
}