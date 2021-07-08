/* exported drop */
function drop(array, count) {
  var newArray = [];
  for (var i = count; i < array.length; i++) {
    newArray.push(array[i]);
  }
  if (count > array.length) {
    newArray = [];
  }
  return newArray;
}

/* 1) create empty array to push values into
2) add values into the array starting at the count indices
3) if the count is greater than the array, return an empty array
4) return array */
