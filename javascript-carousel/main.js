var pictureNumber = 0;
var $pictures = document.querySelectorAll('.image');
var $circles = document.querySelectorAll('.fa-circle');
var timer = null;

slide(pictureNumber);

function slide(x) {
  if (x === undefined) {
    x = ++pictureNumber;
  }
  if (x >= $pictures.length) {
    pictureNumber = 0;
  }
  if (x < 0) {
    pictureNumber = $pictures.length - 1;
  }
  for (var i = 0; i < $pictures.length; i++) {
    $pictures[i].setAttribute('class', 'image hidden');
  }
  for (var e = 0; e < $circles.length; e++) {
    $circles[e].setAttribute('class', 'far fa-circle margin cursor-hover');
  }
  $pictures[pictureNumber].setAttribute('class', 'image active');
  $circles[pictureNumber].setAttribute('class', 'fas fa-circle margin cursor-hover');
  timer = setTimeout(slide, 3000);
}

var $leftArrow = document.querySelector('.fa-angle-left');
var $rightArrow = document.querySelector('.fa-angle-right');

$leftArrow.addEventListener('click', minusSlide);
$rightArrow.addEventListener('click', addSlide);

function minusSlide() {
  clearTimeout(timer);
  pictureNumber = pictureNumber - 1;
  slide(pictureNumber);
}
function addSlide() {
  clearTimeout(timer);
  pictureNumber = pictureNumber + 1;
  slide(pictureNumber);
}

var $circleDiv = document.querySelector('.circle-div');
$circleDiv.addEventListener('click', goToSlide);

function goToSlide(event) {
  if (event.target.nodeName === 'I') {
    clearTimeout(timer);
    var value = event.target.getAttribute('value');
    pictureNumber = value;
    slide(pictureNumber);
  }
}
