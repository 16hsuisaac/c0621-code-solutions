var tabContainer = document.querySelector('.tab-container');
var allTab = document.querySelectorAll('.tab');
var allView = document.querySelectorAll('.view');

tabContainer.addEventListener('click', click);

function click(event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < allTab.length; i++) {
      if (allTab[i] === event.target) {
        allTab[i].className = 'tab active';
      } else {
        allTab[i].className = 'tab';
      }
    }
    var dataView = event.target.getAttribute('data-view');
    for (var a = 0; a < allView.length; a++) {
      if (allView[a].getAttribute('data-view') !== dataView) {
        allView[a].className = 'view hidden';
      } else {
        allView[a].className = 'view';
      }
    }
  }
}
