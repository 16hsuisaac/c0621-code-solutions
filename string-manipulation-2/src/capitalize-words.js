/* exported capitalizeWords */
function capitalizeWords(string) {
  string = string.toLowerCase();
  var newString = '';
  var partString = '';
  partString = partString + string.charAt(0).toUpperCase();
  for (var i = 1; i < string.length; i++) {
    if (string[i - 1] === ' ') {
      partString = partString + string.charAt(i).toUpperCase();
    } if (string[i] !== ' ' & string[i - 1] !== ' ') {
      partString = partString + string[i];
    } if (string[i] === ' ') {
      partString = partString + ' ';
      newString = newString + partString;
      partString = '';
    } if (i === (string.length - 1)) {
      newString = newString + partString;
    }
  }
  return newString;
}

/* 1) create empty string to place full string into
2) create empty string for each word
3) make first letter capitalized as it will always need to be capitalized
4) loop through each letter
5) if the character is not a space AND the previous letter was not a space, add it to the empty word string
6) if the character is a space, add the word string to the full string and clear the word string
7) if the character prior is a space, add the capitalized version of the current character  to the string
8) return the full string */
