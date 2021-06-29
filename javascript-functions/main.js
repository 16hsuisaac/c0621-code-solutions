function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}
var convertedMinutestoSeconds = convertMinutesToSeconds(5);
console.log(convertedMinutestoSeconds + ' seconds');

function greet(name) {
  var greetedName = 'Hey, ' + name;
  return greetedName;
}
var greeted = greet('Beavis');
console.log(greeted);

function getArea(width, height) {
  var area = width * height;
  return area;
}
var foundArea = getArea(17, 42);
console.log('Area:', foundArea);

function getFirstName(person) {
  var firstName = person.firstName;
  return firstName;
}
var foundFirst = getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });
console.log('First name:', foundFirst);

function getLastElement(array) {
  var length = array.length - 1;
  return array[length];
}
var lastElement = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('Last element:', lastElement);
