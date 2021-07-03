/* exported lastChars */
function lastChars(length, string) {
  var newString = '';
  if (length >= string.length) {
    newString = string;
  } else {
    for (var i = (string.length - length); i < string.length; i++) {
      newString = newString + string[i];
    }
  }
  return newString;
}

/* 1) create empty string
2) if length is greater than string length, set new string equal to original string
3) else loop through all the letters starting from the string length minus length input until the given length
4) add each letter to the new string
5) return the new string */
