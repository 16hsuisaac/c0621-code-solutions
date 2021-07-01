/* exported getIndexes */
function getIndexes(array) {
  var length = array.length;
  var i = 0;
  var object = [];
  while (i < length) {
    object.push(i);
    i++;
  }
  return object;
}
