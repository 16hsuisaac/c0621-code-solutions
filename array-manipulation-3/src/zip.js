/* exported zip */
function zip(first, second) {
  var newArray = [];
  var subArray = [];
  for (var i = 0; i < first.length; i++) {
    subArray.push(first[i]);
    subArray.push(second[i]);
    newArray.push(subArray);
    subArray = [];
  }
  if (first.length > second.length) {
    newArray.pop();
  }
  return newArray;
}

/* 1) create empty array to push subarrays into
2) create empty array to become subarrays
3) loop through each index in the first array
4) push values from first and second array at said index into the sub array
5) push sub array into new array
6) clear sub array
7) if first array is longer than second array, remove the last objects
8) return new array */
