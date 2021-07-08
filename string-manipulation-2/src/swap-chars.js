/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var newString = '';
  var firstIndexValue = string[firstIndex];
  var secondIndexValue = string[secondIndex];
  for (var i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      newString = newString + secondIndexValue;
    } else if (i === secondIndex) {
      newString = newString + firstIndexValue;
    } else {
      newString = newString + string[i];
    }
  }
  return newString;
}

/* 1) create empty string to push values into
2) create variables for values at first and second indices
3) loop through each letter
4) if i = first index, replace value with variable containing value of second index
5) else if i = second index, replace value w variable containing value of first index
6) else add the letter to the string
7) return new string */
