const takeAChance = require('./take-a-chance');

const name = takeAChance('Isaac');

name.then(value => {
  console.log(value);
});

name.catch(error => {
  console.log(error.message);
});
