/* exported initial */
function initial(array) {
  var newArray = [];
  for (var i = 0; i < (array.length - 1); i++) {
    newArray.push(array[i]);
  }
  return newArray;
}

/* 1) set up empty array to push items into,
2) loop through original array and stop before the last item,
3) push all items into new array,
4) return new array */
