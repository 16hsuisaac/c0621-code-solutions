/* exported isPalindromic */
function isPalindromic(string) {
  var palindrome = true;
  var newString = '';
  for (var i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      newString = newString + string[i];
    }
  }
  for (var i2 = 0; i2 < newString.length; i2++) {
    if (newString[i2] !== newString[((newString.length - 1) - i2)]) {
      palindrome = false;
    }
  }
  return palindrome;
}

/* 1) set bool default to true
2) create an empty string
3) loop through the original string
4) look for spaces as those would affect the results
5) if the character is NOT a space, add it to the empty string
6) loop through the new string
7) compare the characters to their inverse
8) if they are not the same, change bool to false
9) return bool */
