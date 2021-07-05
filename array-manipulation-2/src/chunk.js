/* exported chunk */
function chunk(array, size) {
  var newArray = [];
  var partArray = [];
  for (var i = 0; i <= array.length; i++) {
    if (i === 0) {
      partArray.push(array[i]);
    } else if (i === array.length) {
      newArray.push(partArray);
    } else if ((i % size) !== 0) {
      partArray.push(array[i]);
    } else if ((i % size) === 0){
      newArray.push(partArray);
      partArray = [];
      partArray.push(array[i]);
    }
  }
  return newArray;
}


/* 1) create empty array to push arrays into
2) create empty temporary array to push items into
3) loop through each value of the original array
4) if the i is stricly equal to 0 then push it to the temporary array
5) else if it is strictly equal to the length, push the temporary array to the other array
6) if i%size does not equal zero, push the array at i into the temporary array
7) if i%size === 0 then push the temporary array into the new array, clear the temporary array, push the array at i into the temporary array
8) return new array */
