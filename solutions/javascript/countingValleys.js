function countingValleys(steps, path) {
  let seaLevel = 0;
  let valleys = 0;
  for (let i = 0; i < steps; i++) {
    if (path[i] === 'U') {
      seaLevel++;
      if (seaLevel == 0) {
        valleys++;
      }
    } else {
      seaLevel--;
    }
  }

  return valleys;
}
