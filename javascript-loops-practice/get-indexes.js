/* exported getIndexes */
function getIndexes(array) {
  var length = array.length;
  var i = 0;
  var newArray = [];
  while (i < length) {
    newArray.push(i);
    i++;
  }
  return newArray;
}
