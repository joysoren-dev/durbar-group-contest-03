function reverseEachWord(str) {
  // string ke space diye words e vag kortesi
  const words = str.split(" ");

  // ekhane prottekta word reverse kortesi
  const reversedWords = words.map(function (word) {
    return word.split("").reverse().join("");
  });

  // reversed words gulo abar space diye join kortesi
  return reversedWords.join(" ");
}
