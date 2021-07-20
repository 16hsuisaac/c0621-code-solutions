setTimeout(changeText, 2.0 * 1000);
var h1 = document.querySelector('h1');

function changeText() {
  h1.textContent = 'Hello There';
}
