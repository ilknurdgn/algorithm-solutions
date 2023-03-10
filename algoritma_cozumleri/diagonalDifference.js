function diagonalDifference(arr) {
  let result1 = 0;
  let result2 = 0;
  for (let i = 0; i < arr.length; i++) {
    result1 += arr[i][i];
    result2 += arr[i][arr.length - i - 1];
  }
  return Math.abs(result1 - result2);
}
