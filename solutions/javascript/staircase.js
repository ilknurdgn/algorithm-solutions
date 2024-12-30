function staircase(n) {
  let line;
  for (let i = 0; i < n; i++) {
    line = "";
    for (let j = 0; j < n - i - 1; j++) {
      line += " ";
    }
    for (let k = 0; k < i + 1; k++) {
      line += "#";
    }
    console.log(line);
  }
}
