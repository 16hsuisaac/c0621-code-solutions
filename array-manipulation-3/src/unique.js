/* exported unique */
function unique(array) {
  var newArray = [];
  newArray.push(array[0]);
  for (var i = 1; i < array.length; i++) {
    for (var i2 = 0; i2 < newArray.length; i2++) {
      if (array[i] === newArray[i2]) {
        array.splice(array[i]);
      }
    }
  }
  for (var i3 = 1; i3 < array.length; i3++) {
    newArray.push(array[i3]);
  }
  return newArray;
}
