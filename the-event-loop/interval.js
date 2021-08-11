let count = 3;
const intervalSet = setInterval(interval, 1000);

function interval() {
  if (count !== 0) {
    console.log(count);
    count--;
  } else if (count === 0) {
    console.log('Blast off!');
    clearInterval(intervalSet);
  }
}
