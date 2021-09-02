const makeCounter = function () {
  let privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function () {
      changeBy(1);
    },
    decrement: function () {
      changeBy(-1);
    },
    value: function () {
      return privateCounter;
    }
  };
};

const counter1 = makeCounter();
const counter2 = makeCounter();

alert(counter1.value());

counter1.increment();
counter1.increment();
alert(counter1.value());

counter1.decrement();
alert(counter1.value());
alert(counter2.value());
