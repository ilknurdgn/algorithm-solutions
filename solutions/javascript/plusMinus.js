function plusMinus(arr) {
  let positive = 0;
  let negative = 0;
  let zero = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      negative += 1;
    } else if (arr[i] > 0) {
      positive += 1;
    } else {
      zero += 1;
    }
  }
  let p = (positive / arr.length).toFixed(6);
  let n = (negative / arr.length).toFixed(6);
  let z = (zero / arr.length).toFixed(6);
  console.log(p);
  console.log(n);
  console.log(z);
}
