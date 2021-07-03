/* exported ransomCase */
function ransomCase(string) {
  var newString = '';
  newString = newString + string.charAt(0).toLowerCase();
  for (var i = 1; i < string.length; i++) {
    if ((i % 2) === 0) {
      newString = newString + string.charAt(i).toLowerCase();
    } else {
      newString = newString + string.charAt(i).toUpperCase();
    }
  }
  return newString;
}

/* 1) create empty string to assing values to,
2) make first letter a lower case and add to string,
3) for remaining values, lower case the even indices and upper case the odd indices,
4) add characters to new string
5) return new string */
