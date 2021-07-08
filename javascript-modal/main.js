var open = document.querySelector('.open');
var modal = document.querySelector('.modal');
var no = document.querySelector('.no');

open.addEventListener('click', function (event) {
  modal.className = 'modal after';
});

no.addEventListener('click', function (event) {
  modal.className = 'modal before';
});
