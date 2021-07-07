/* exported unique */
function unique(array) {
  var newArray = [];
  var uniqueIndex = true;
  newArray.push(array[0]);
  for (var i = 1; i < array.length; i++) {
    for (var e = 0; e < newArray.length; e++) {
      if (array[i] === newArray[e]) {
        uniqueIndex = false;
      }
    }
    if (uniqueIndex === true) {
      newArray.push(array[i]);
    }
    uniqueIndex = true;
  }
  if (array.length === 0) {
    newArray = [];
  }
  return newArray;
}

/* 1) declare empty array to push values into
2) push array[0] into the empty array
3) loop through array starting from index 1
4) loop through new array
5) if array index i does not equal any value in the new array
6) push array[i] to the new array
7) if original array has a length of 0; empty newArray
8) return newArray */
