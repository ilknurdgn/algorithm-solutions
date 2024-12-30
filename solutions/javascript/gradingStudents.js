function gradingStudents(grades) {
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] < 38) {
    } else if (grades[i] % 5 > 2) {
      let difference = 5 - (grades[i] % 5);
      grades[i] += difference;
    }
  }
  return grades;
}
