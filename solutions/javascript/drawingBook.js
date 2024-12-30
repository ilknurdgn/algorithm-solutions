function pageCount(n, p) {
  let front = Math.floor(p / 2);
  let back = Math.floor(n / 2 - front);

  if (front < back) {
    return front;
  } else {
    return back;
  }
}
