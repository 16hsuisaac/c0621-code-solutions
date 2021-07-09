/* exported flatten */
function flatten(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (var i2 = 0; i2 < array[i].length; i2++) {
        newArray.push(array[i][i2]);
      }
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

/* 1) create an empty array to push values into
2) loop through each value in the array
3) if the value is an array
4) loop through array and push each nested array value into the new array
5) else just push array values into the new array
6) return new array */
