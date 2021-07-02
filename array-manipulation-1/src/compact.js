/* exported compact */
function compact(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

/* 1) set up empty array,
2) loop through original array to look at each item,
3) if the item is truthy, push it to the new array,
4) return new array */
