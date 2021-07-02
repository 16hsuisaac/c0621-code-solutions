/* exported toObject */
function toObject(keyValuePair) {
  var object = {};
  object[keyValuePair[0]] = keyValuePair[1];
  return object;
}

/* 1) create empty object to push items into,
2) create an object key with the first value of the inputted array and set it equal to the second value of the array,
3) return object */
