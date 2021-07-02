/* exported getKeys */
function getKeys(object) {
  var newArray = [];
  for (var key in object) {
    newArray.push(key);
  }
  return newArray;
}

/* 1) set up empty array to push items into,
2) loop through each key in the object,
3) push key into new array,
4) return new array */
