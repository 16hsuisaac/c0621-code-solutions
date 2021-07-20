setInterval(countDown, 1.0 * 1000);

var h1 = document.querySelector('h1');

function countDown() {
  if (h1.textContent === '...') {
    h1.textContent = '4';
  } else if (h1.textContent === '4') {
    h1.textContent = '3';
  } else if (h1.textContent === '3') {
    h1.textContent = '2';
  } else if (h1.textContent === '2') {
    h1.textContent = '1';
  } else if (h1.textContent === '1') {
    h1.textContent = '~Earth Beeeelooowww Us~';
  } else if (h1.textContent === '~Earth Beeeelooowww Us~') {
    clearInterval(setInterval(countDown, 1.0 * 1000));
  }
}
