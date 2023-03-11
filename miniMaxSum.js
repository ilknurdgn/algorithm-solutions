function miniMaxSum(arr) {
  let sorted = arr.sort();
  let sum = 0;
  let length = sorted.length;
  for (let i = 1; i < length - 1; i++) {
    sum += sorted[i];
  }
  let min = sum + sorted[0];
  let max = sum + sorted[length - 1];
  console.log(min + " " + max);
}
