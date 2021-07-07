/* exported unique */
function unique(array) {
  var newArray = [];
  var count = 0;
  newArray.push(array[0]);
  for (var e = 1; e < array.length; e++) {
    newArray.push(array[e]);
    for (var o = 0; o < (newArray.length - 1); o++) {
      if (newArray[e] === newArray[o]) {
        newArray.splice((e - count), 1);
        count += 1;
      }
    }
  }
  return newArray;
}

/*   for (var a = (newArray.length - 1); a >= 0; a--) {
    for (var e = 0; e < newArray.length; e++) {
      if (newArray[a] === newArray[e]) {
        newArray.splice(a, 1);
      }
    }
  }
  return newArray;
}
 */
/* 1) declare empty array to push values into
2) push array[0] into the empty array
3) loop through array starting from index 1
4) loop through new array
5) if array index i does not equal any value in the new array
6) push array[i] to the new array */
