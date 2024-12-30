function breakingRecords(scores) {
  let max = 0;
  let min = 0;
  let highestScore = scores[0];
  let lowestScore = scores[0];

  for (let i = 0; i < scores.length - 1; i++) {
    if (scores[i + 1] > highestScore) {
      highestScore = scores[i + 1];
      max += 1;
    } else if (scores[i + 1] < lowestScore) {
      lowestScore = scores[i + 1];
      min += 1;
    }
  }
  return [max, min];
}
