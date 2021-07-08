var span = document.querySelectorAll('span');
var i = 0;
document.addEventListener('keydown', keyPress);

function keyPress(event) {
  span[i].className = 'highlight';
  if (i === (span.length - 1)) {
    span[i].className = 'correct';
  } else if (event.key === span[i].textContent) {
    span[i].className = 'correct';
    span[i + 1].className = 'highlight';
    i++;
  } else {
    span[i].className = 'incorrect highlight';
  }
}
