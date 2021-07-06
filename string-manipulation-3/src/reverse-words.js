/* exported reverseWords */
function reverseWords(string) {
  var newString = '';
  var partString = '';
  for (var i = 0; i <= string.length; i++) {
    if (string[i] !== ' ' & (i !== (string.length))) {
      partString = partString + string[i];
    } else {
      partString = ' ' + partString;
      for (var i2 = (partString.length - 1); i2 >= 0; i2--) {
        newString = newString + partString[i2];
      } partString = '';
    }
  }
  newString = newString.slice(0, (string.length));
  return newString;
}

/* 1) create empty string for full sentence
2) create part string for words
3) loop through the string
4) for spaces AND if NOT the end of the string, add the character to the word string
5) else add a space and loop through the part string backwards and add to the sentence string
6) reset the part string
7) slice the string to get rid of the extra space at the end
8) return the string */
