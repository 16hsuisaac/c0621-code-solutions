function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  console.log(seconds + ' seconds');
}
convertMinutesToSeconds(5);

function greet(name) {
  console.log('Hey,', name);
}
greet('Beavis');

function getArea(width, height) {
  var area = width * height;
  console.log('Area:', area);
}
getArea(17, 42);

function getFirstName(person) {
  var firstName = person.firstName;
  console.log('First name:', firstName);
}
getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });

function getLastElement(array) {
  var length = array.length - 1;
  console.log('Last element:', array[length]);
}
getLastElement(['propane', 'and', 'propane', 'accessories']);
