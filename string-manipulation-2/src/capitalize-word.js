/* exported capitalizeWord */
function capitalizeWord(word) {
  var newString = '';
  newString = newString + word.charAt(0).toUpperCase();
  for (var i = 1; i < word.length; i++) {
    newString = newString + word.charAt(i).toLowerCase();
  }
  if (word.toUpperCase() === 'JAVASCRIPT') {
    newString = 'JavaScript';
  }
  return newString;
}

/* 1) create an empty string
2) add the capitalized value of the first letter of the word to the string
3) for remaining values of the string, convert to lower case and add to string
4) if the word is any variation of javascript, make string = JavaScript
5) return new string */
