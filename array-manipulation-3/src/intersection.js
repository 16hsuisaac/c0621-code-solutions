/* exported intersection */
function intersection(first, second) {
  var newArray = [];
  var isDifferent = true;
  for (var i = 0; i < first.length; i++) {
    for (var e = 0; e < second.length; e++) {
      if (first[i] === second[e]) {
        isDifferent = false;
      }
    }
    if (isDifferent === false) {
      newArray.push(first[i]);
    }
    isDifferent = true;
  }
  return newArray;
}

/* 1) create empty array to push values into
2) create boolean default to true
3) loop through each item of the first array
4) nested loop through each item of the second array
5) if the items are the same, set bool to false
6) if the bool is false, push the first array index into the empty array
7) set bool to true for next loop
8) return new array */
