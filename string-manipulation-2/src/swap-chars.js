/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var newString = '';
  for (var i = 0; i < string.length; i++) {
    if (string[firstIndex]) {
      newString = newString + string[secondIndex];
    } if (string[secondIndex]) {
      newString = newString + string[firstIndex];
    } else {
      newString = newString + string[i];
    }
  }
  return newString;
}
