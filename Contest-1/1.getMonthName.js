function getMonthName(monthNumber) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return months[monthNumber - 1];
}

console.log(getMonthName(9)); // September
console.log(getMonthName(5)); // May
console.log(getMonthName(3)); // March
console.log(getMonthName(11)); // November
console.log(getMonthName(12)); // December