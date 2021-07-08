/* exported difference */
function difference(first, second) {
  var newArray = [];
  var isDifferent = true;
  for (var i = 0; i < first.length; i++) {
    for (var e = 0; e < second.length; e++) {
      if (first[i] === second[e]) {
        isDifferent = false;
      }
    }
    if (isDifferent === true) {
      newArray.push(first[i]);
    }
    isDifferent = true;
  }
  for (e = 0; e < second.length; e++) {
    for (i = 0; i < first.length; i++) {
      if (second[e] === first[i]) {
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

/* 1) make empty array to push values into
2) declare bool variable default to true
3) loop through each item in first array
4) nested loop to go through each item of the second array
5) if item in the first array matches any item in the second array, set bool to false
6) if bool = true, push value of first into array
8) set bool default to true
7) repeat process for second array
8) return array */
