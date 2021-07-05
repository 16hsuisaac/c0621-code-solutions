/* exported takeRight */
function takeRight(array, count) {
  var newArray = [];
  for (var i = (array.length - count); i < array.length; i++) {
    newArray.push(array[i]);
  }
  if (count > array.length) {
    newArray = array;
  }
  return newArray;
}

/* 1) create an empty array to push into
2) loop through the array from index of array length - count
3) push items into array
4) if the count is greater than the array, return the original array
5) return the new array */
