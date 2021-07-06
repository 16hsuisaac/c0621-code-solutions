/* exported defaults */
function defaults(target, source) {
  var source2 = Object.assign({}, source);
  for (var i in source2) {
    if (target[i] !== undefined) {
      delete source2[i];
    }
  }
  Object.assign(target, source2);
}

/* 1) create a new array and assign it values of source array
2) for each property in new array, check if target has said property
3) if so, delete the value in the source array
4) assign values from the source array to the target array */
