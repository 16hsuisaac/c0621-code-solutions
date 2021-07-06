/* exported equal */
function equal(first, second) {
  var isEqual = true;
  for (var i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      isEqual = false;
    }
  }
  if (first.length !== second.length) {
    isEqual = false;
  }
  return isEqual;
}

/* 1) default a bool to true
2) loop through the first array
3) if second array value does not match first array value, set bool to false
4) if the length of arrays are different, set bool to false
5) return bool */
