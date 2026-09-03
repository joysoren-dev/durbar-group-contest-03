function checkMathOperationsForNine(a, b) {
  if (a + b === 9 || a - b === 9 || a * b === 9 || a / b === 9) {
    return "Nine";
  } else {
    return "Nein";
  }
}

console.log(checkMathOperationsForNine(4, 5)); // Nine
console.log(checkMathOperationsForNine(10, 1)); // Nine
console.log(checkMathOperationsForNine(3, 3)); // Nine
console.log(checkMathOperationsForNine(18, 2)); // Nine
console.log(checkMathOperationsForNine(1, 2)); // Nein