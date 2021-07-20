var h1 = document.querySelector('h1');
var i = 4;
var intervalID = setInterval(countDown, 1.0 * 1000);

function countDown() {
  h1.textContent = i;
  if (i === 0) {
    h1.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(intervalID);
  }
  i = i - 1;
}
