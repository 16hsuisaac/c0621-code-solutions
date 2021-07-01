/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var array = [];
  for (var i = 0; i < words.length; i++) {
    var combined = words[i] + suffix;
    array.push(combined);
  }
  return array;
}
