var span = document.querySelectorAll('span');

document.addEventListener('keydown', keyPress);

function keyPress(event) {
  for (var i = 0; i < span.length; i++) {
    if (event.key === span[i]) {
      span[i].className = 'correct';
    } else {
      span[i].className = 'incorrect';
      i = i - i;
    }
  }
}
