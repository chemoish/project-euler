/*
The sum of the squares of the first ten natural numbers is,

12 + 22 + ... + 102 = 385
The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)2 = 552 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
*/

(function () {
  function calculate() {
    var max = 100,
        sum_square = 0,
        square_sum = 0;

    for (var i = 0; i <= max; i++) {
      sum_square += i;
    }

    for (var i = 0; i <= max; i++) {
      square_sum += Math.pow(i, 2);
    }

    console.log(Math.pow(sum_square, 2) - square_sum);
  }

  console.time('calculate');

  calculate();

  console.timeEnd('calculate');
}());
