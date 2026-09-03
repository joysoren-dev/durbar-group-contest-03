function countNumberProperties(numbers) {
  let even = 0;
  let odd = 0;
  let positive = 0;
  let negative = 0;

  for (const number of numbers) {
    if (number % 2 === 0) {
      even = even + 1;
    } else {
      odd = odd + 1;
    }

    if (number > 0) {
      positive = positive + 1;
    } else if (number < 0) {
      negative = negative + 1;
    }
  }

  return {
    even: even,
    odd: odd,
    positive: positive,
    negative: negative,
  };
}

console.log(countNumberProperties([-5, 0, 3, -4, 1]));

console.log(countNumberProperties([2, 4, 6, 8, 10]));