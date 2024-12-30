function kangaroo(x1, v1, x2, v2) {
  if (v2 >= v1) {
    return "NO";
  } else if (v2 < v1) {
    if ((x2 - x1) % (v1 - v2) == 0) {
      return "YES";
    } else {
      return "NO";
    }
  }
}
