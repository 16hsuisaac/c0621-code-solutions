/* exported tail */
function tail(array) {
  var newArray = [];
  for (var i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}

/* 1) set up empty array,
2) loop through original array starting from the second item,
3) push each remaining item into the new array */
