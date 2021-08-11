const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

const operation = process.argv[3];
const a = parseInt(process.argv[2]);
const b = parseInt(process.argv[4]);

if (operation === 'plus') {
  console.log(add(a, b));
} else if (operation === 'minus') {
  console.log(subtract(a, b));
} else if (operation === 'times') {
  console.log(multiply(a, b));
} else if (operation === 'over') {
  console.log(divide(a, b));
} else {
  console.log('You did not enter a valid calulation');
}
