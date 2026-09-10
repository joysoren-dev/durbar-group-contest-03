function convertTemperature(value, unit) {
  // unit C hole Celsius theke Fahrenheit e convert kortesi
  if (unit === "C") {
    return Math.round(((value * 9) / 5 + 32) * 100) / 100;
  }

  // unit F hole Fahrenheit theke Celsius e convert kortesi
  else if (unit === "F") {
    return Math.round((((value - 32) * 5) / 9) * 100) / 100;
  }
}
