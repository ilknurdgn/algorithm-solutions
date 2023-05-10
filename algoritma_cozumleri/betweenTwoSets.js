function getTotalX(a, b) {
  let endValue = a[a.length - 1];
  let firstValue = b[0];
  let betweenTwoArrays = 0;

  for (let i = endValue; i <= firstValue; i++) {
    if (
      a.every((number_a) => i % number_a == 0) &&
      b.every((number_b) => number_b % i == 0)
    ) {
      betweenTwoArrays++;
    }
  }

  return betweenTwoArrays;
}
