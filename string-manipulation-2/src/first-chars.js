/* exported firstChars */
function firstChars(length, string) {
  var newString = '';
  if (length >= string.length) {
    newString = string;
  } else {
    for (var i = 0; i < length; i++) {
      newString = newString + string[i];
    }
  }
  return newString;
}

/* 1) create empty string
2) if length is greater than string length, set new string equal to original string
3) else loop through all the letters until the given length
4) add each letter to the new string
5) return the new string */
