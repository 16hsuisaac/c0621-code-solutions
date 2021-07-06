/* exported invert */
function invert(source) {
  var keys = [];
  for (var key in source) {
    keys.push(key);
  }
  var values = [];
  for (key in source) {
    values.push(source[key]);
  }
  var newObject = {};
  for (var i = 0; i < keys.length; i++) {
    newObject[values[i]] = keys[i];
  }
  return newObject;
}

/* 1) create empty array for keys in the source
2) push keys into the empty key array
3) create empty array for values in the source
4) push values into the empty value array
5) for each item in the array, reassign them to flip the value/keys
6) return array */
