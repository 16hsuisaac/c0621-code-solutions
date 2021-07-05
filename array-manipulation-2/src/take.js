/* exported take */
function take(array, count) {
  var newArray = [];
  for (var i = 0; i < count; i++) {
    newArray.push(array[i]);
  }
  if (count > array.length) {
    newArray = array
  }
  return newArray;
}

/* 1) create new array to push values into
2) push the values of indices 0 until count into the new array
3) if the count is longer than the array, return the original array */
