function repeatedDigitSum(n) {
  // ekhane n single digit na howa porjonto pura process ta repeat kortesi, karon 9 porjonto single digit tai 10 ba tar beshi hole abar kaj korte hobe
  while (n >= 10) {
    // prottekbar notun kore digit gulo add korar jonno sum 0 theke nitesi
    let sum = 0;

    // digit gulo ekta ekta kore nite ekhane n ke string e convert kortesi
    const digits = n.toString();

    // ekhane digits er prottekta value ekta ekta kore niye sum er sathe jog kortesi
    for (const digit of digits) {
      sum = sum + Number(digit);
    }

    // sum e notun value peye gesi, ekhon etake abar n er moddhe nitesi jate kore next round e abar ei n er digit gulo add korte pari
    n = sum;
  }

  // n single digit hoye gele ekhane final value ta return kore ditesi
  return n;
}
