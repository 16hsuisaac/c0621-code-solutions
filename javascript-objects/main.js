var student = {
  firstName: 'Isaac',
  lastName: 'Hsu',
  age: 23
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('fullName:', fullName);

student.livesInIrvine = true;
student.previousOccupation = 'Student';
console.log('livesInIrvine:', student.livesInIrvine);
console.log('previousOccupation:', student.previousOccupation);
console.log('student:', student);

var vehicle = {
  make: 'Acura',
  model: 'MDX',
  year: 2006
};
vehicle['color'] = 'white';
vehicle['isConvertible'] = false;
console.log('Color:', vehicle['color']);
console.log('isConvertible:', vehicle['isConvertible']);
console.log('vehicle:', vehicle);

var pet = {
  name: 'petname',
  type: 'dog'
};
delete pet.name;
delete pet.type;
console.log('pet:', pet);
