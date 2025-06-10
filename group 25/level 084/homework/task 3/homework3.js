function multiplyNumbers(start, end) {
  let product = 1;
  for (let i = start; i <= end; i++) {
    product *= i;
  }
  return product;
}