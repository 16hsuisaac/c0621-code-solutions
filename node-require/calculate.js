const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

const operation = process.argv[3];
const a = process.argv[2];
const b = process.argv[4];

if (operation === 'plus') {
  console.log(add(parseInt(a), parseInt(b)));
} else if (operation === 'minus') {
  console.log(subtract(parseInt(a), parseInt(b)));
} else if (operation === 'times') {
  console.log(multiply(parseInt(a), parseInt(b)));
} else if (operation === 'over') {
  console.log(divide(parseInt(a), parseInt(b)));
} else {
  console.log('You did not enter a valid calulation');
}
