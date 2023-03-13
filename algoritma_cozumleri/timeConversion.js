function timeConversion(s) {
  let hour = s.slice(0, 2);
  let minute = s.slice(3, 5);

  if (s.includes("AM")) {
    if (hour == "12") {
      s = s.replace(hour, "00");
    }
  } else if (s.includes("PM")) {
    if (hour != "12") {
      let newHour = String(Number(hour) + 12);
      s = s.replace(hour, newHour);
    }
  }
  let hourFormat = s.slice(0, 8);
  return hourFormat;
}
