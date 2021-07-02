/* exported capitalize */
function capitalize(word) {
  var firstLetter = word.charAt(0).toUpperCase();
  var restLetters = word.slice(1);
  restLetters = restLetters.toLowerCase();
  var capWord = firstLetter + restLetters;

  return capWord;
}

/* The first letter can be isolated and capitalized using its index and a method,
the rest of the characters can be sliced and made lowercase,
the result of the two can be added to create the final word */
