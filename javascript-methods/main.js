var num1 = 6;
var num2 = 1;
var num3 = 92;
var maximumValue = Math.max(num1, num2, num3);
console.log('maximumValue:', maximumValue);
var heroes = ['Iron Man', 'Captain America', 'Spider Man', 'Batman'];
var randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('randomIndex:', randomIndex);
var randomHero = heroes[randomIndex];
console.log('randomHero', randomHero);

var library = [
  { title: 'book1', author: 'author1' },
  { title: 'book2', author: 'author2' },
  { title: 'book3', author: 'author3' }
];
var lastBook = library.pop();
console.log('lastBook', lastBook);
var firstBook = library.shift();
console.log('firstBook:', firstBook);
var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log(library);

var fullName = 'Isaac Hsu';
var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyName', sayMyName);
