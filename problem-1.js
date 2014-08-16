/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.

http://jsperf.com/project-euler-js-problem-1
*/

(function () {
  function calculate() {
    var sum = 0;

    for (var i = 0; i < 1000; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }

    console.log(sum);
  }

  console.time('calculate');

  calculate();

  console.timeEnd('calculate');
}());

(function () {
  function calculate() {
    var sum = 0;

    for (var i = 0; i < 1000; i += 3) {
      sum += i;
    }

    for (var i = 0; i < 1000; i += 5) {
      if (i % 3 !== 0) {
        sum += i;
      }
    }

    console.log(sum);
  }

  console.time('calculate');

  calculate();

  console.timeEnd('calculate');
}());

(function () {
  function iterate5(i) {
    if ((i - 1) % 3 !== 0) {
      return i + 5;
    } else {
      return i + 10;
    }
  }

  function calculate() {
    var sum = 0;

    for (var i = 3; i < 1000; i += 3) {
      sum += i;
    }

    for (var i = 5; i < 1000; i = iterate5(i)) {
      sum += i;
    }

    console.log(sum);
  }

  console.time('calculate');

  calculate();

  console.timeEnd('calculate');
}());
