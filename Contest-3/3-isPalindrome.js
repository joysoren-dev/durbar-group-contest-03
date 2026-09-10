function isPalindrome(str) {
  // string er sob character ekhane lowercase kortesi
  const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  // ekhane cleaned string take reverse kortesi
  const reversedStr = cleanedStr.split("").reverse().join("");

  // original cleaned string ebong reversed string same kina check kore return kortesi ekhon
  return cleanedStr === reversedStr;
}
