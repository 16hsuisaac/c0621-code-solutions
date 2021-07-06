/* exported pick */
function pick(source, keys) {
  var keysObject = {};
  for (var i = 0; i < keys.length; i++) {
    if (source[keys[i]] !== undefined) {
      keysObject[(keys[i])] = source[keys[i]];
    }
  }
  return keysObject;
}

/* 1) create empty object to push items into
2) loop through each key
3) if the source contains the key, push it into the empty object
4) return the object */
