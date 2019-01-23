function sumPrimes(num) {
  let sum = 1;
  for (var i = 0; i <= num; i++) {
    for (var j = 2; ((j < i) && (i % j !== 0)); j++) {
      console.log(i, j, i % j);
      if (i === (j - 1)) {
        sum += i;
      }
    }
  }
  return sum;
}

console.log(sumPrimes(10));
