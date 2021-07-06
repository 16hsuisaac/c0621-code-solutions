function handleClick(event) {
  console.log('button clicked', event, event.target);
}
var clickButtonClass = document.querySelector('.click-button');
clickButtonClass.addEventListener('click', handleClick, false);

function handleMouseover(event) {
  console.log('button hovered', event, event.target);
}
var hoverButtonClass = document.querySelector('.hover-button');
hoverButtonClass.addEventListener('mouseover', handleMouseover, false);

function handleDoubleClick(event) {
  console.log('button double-clicked', event, event.target);
}
var doubleClickClass = document.querySelector('.double-click-button');
doubleClickClass.addEventListener('dblclick', handleDoubleClick, false);
