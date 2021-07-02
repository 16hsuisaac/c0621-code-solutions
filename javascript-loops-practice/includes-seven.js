/* exported includesSeven */
function includesSeven(array) {
  var result = false;
  for (var i = array.length - 1; i >= 0; i--) {
    if (array[i] === 7) {
      result = true;
    }
  }
  return result;
}
