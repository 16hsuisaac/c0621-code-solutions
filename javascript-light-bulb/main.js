var lightbulb = document.querySelector('.circle');
var background = document.querySelector('.container');

lightbulb.addEventListener('click', function () {
  if (lightbulb.className === 'circle light') {
    lightbulb.className = 'circle dark';
    background.className = 'container dark-background';
  } else {
    lightbulb.className = 'circle light';
    background.className = 'container light-background';
  }
});
