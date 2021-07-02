/* exported getValues */
function getValues(object, key) {
  var newArray = [];
  for (key in object) {
    newArray.push(object[key]);
  }
  return newArray;
}

/* 1) create empty array to push items into,
2) use for in loop to cycle through items of the object,
3) push the  value of the key into the new array,
4) return new array */
