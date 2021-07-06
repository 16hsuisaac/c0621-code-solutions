var clickCountNumber = 0;
var hotButton = document.querySelector('.hot-button');
var clickCount = document.querySelector('.click-count');

function clickUp(event) {
  clickCountNumber += 1;
  clickCount.textContent = ('Clicks: ' + clickCountNumber);
  if (clickCountNumber < 4) {
    hotButton.className = 'hot-button cold';
  } else if (clickCountNumber < 7) {
    hotButton.className = 'hot-button cool';
  } else if (clickCountNumber < 10) {
    hotButton.className = 'hot-button tepid';
  } else if (clickCountNumber < 13) {
    hotButton.className = 'hot-button warm';
  } else if (clickCountNumber < 16) {
    hotButton.className = 'hot-button hot';
  } else if (clickCountNumber >= 16) {
    hotButton.className = 'hot-button nuclear';
  }
}

hotButton.addEventListener('click', clickUp);
