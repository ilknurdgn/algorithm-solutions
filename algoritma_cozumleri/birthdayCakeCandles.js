function birthdayCakeCandles(candles) {
  let sorted = candles.sort((a, b) => a - b);
  let tallestCandle = sorted[sorted.length - 1];
  let numberOfCandles = 0;
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] == tallestCandle) {
      numberOfCandles += 1;
    }
  }
  return numberOfCandles;
}
