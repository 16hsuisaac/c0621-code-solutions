/* exported reverse */
function reverse(array) {
  var newArray = [];
  for (var i = (array.length - 1); i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}

/* 1) set up empty array to push items into,
2) loop through original array backwards,
3) push items into new array,
4) return array */
