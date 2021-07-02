/* exported getLastChar */
function getLastChar(string) {
  var lastChar = string[(string.length - 1)];
  return lastChar;
}

/* the last character of a string will always have an index of
string.length - 1, thus the last character of the string will
always be at string[(string.length - 1)] */
