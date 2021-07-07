/* exported union */
function union(first, second) {
  var newArray = [];
  var isDifferent = true;
  for (var i = 0; i < first.length; i++) {
    newArray.push(first[i]);
  }
  for (var e = 0; e < second.length; e++) {
    for (var o = 0; o < newArray.length; o++) {
      if (second[e] === newArray[o]) {
        isDifferent = false;
      }
    }
    if (isDifferent === true) {
      newArray.push(second[e]);
    }
    isDifferent = true;
  }
  return newArray;
}

/* 1) create empty array to push values into
2) create bool default to true
3) loop through first array and add all items to new array
4) loop through second array
5) loop through first array and check if value is equal to value of second array
6) if value is the same then sent bool to false
7) for the second array loop, if bool = true, push the value into the new array
8) reset bool to true
9) return new arra */
