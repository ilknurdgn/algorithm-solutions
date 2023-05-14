function migratoryBirds(arr) {
  let typeOfBird = [];
  let repeatedCounts = [];

  arr.forEach((num) => {
    if (!typeOfBird.includes(num)) {
      typeOfBird.push(num);
    }
  });
  typeOfBird.sort(function (a, b) {
    return a - b;
  });

  for (let i = 0; i < typeOfBird.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (typeOfBird[i] == arr[j]) {
        count++;
      }
    }
    repeatedCounts.push(count);
  }

  let max = Math.max(...repeatedCounts);
  let index = repeatedCounts.indexOf(max);
  return typeOfBird[index];
}
