function handleFocus(event) {
  console.log('focus event was fired');
  console.log('event target name', event.target.name);
}

function handleBlur(event) {
  console.log('blur event was fired');
  console.log('event target name', event.target.name);
}

function handleInput(event) {
  console.log('event target name', event.target.name);
  console.log('event target value', event.target.value);
}

var input1 = document.querySelector('input');
var input2 = document.querySelector('input:nth-of-type(2)');
var textarea = document.querySelector('textarea');

input1.addEventListener('focus', handleFocus);
input1.addEventListener('blur', handleBlur);
input1.addEventListener('input', handleInput);
input2.addEventListener('focus', handleFocus);
input2.addEventListener('blur', handleBlur);
input2.addEventListener('input', handleInput);
textarea.addEventListener('focus', handleFocus);
textarea.addEventListener('blur', handleBlur);
textarea.addEventListener('input', handleInput);
