/* exported dropRight */
function dropRight(array, count) {
  var newArray = [];
  for (var i = 0; i < (array.length - count); i++) {
    newArray.push(array[i]);
  }
  if (count > array.length) {
    newArray = [];
  }
  return newArray;
}

/* 1) create empty array to push items into
2) cycle through the original array until length - count
3) push items into the array until loop finishes
4) if the count > array length, newArray will be empty
5) return newArray */
