function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let numberOfApples = 0;
  let numberOfOranges = 0;
  for (let i = 0; i < apples.length; i++) {
    if (s <= apples[i] + a && apples[i] + a <= t) {
      numberOfApples += 1;
    }
  }
  for (let j = 0; j < oranges.length; j++) {
    if (s <= oranges[j] + b && oranges[j] + b <= t) {
      numberOfOranges += 1;
    }
  }
  console.log(numberOfApples);
  console.log(numberOfOranges);
}
