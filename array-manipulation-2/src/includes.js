/* exported includes */
function includes(array, value) {
  var includes = false;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      includes = true;
    }
  }
  return includes;
}

/* 1) create variable boolean set to false
2) loop through entire array
3) check if any array values are strictly equal to the input value
4) change variable boolean to true if yes, else default false
5) return boolean */
