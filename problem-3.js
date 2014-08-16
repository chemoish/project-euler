/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?

http://jsperf.com/project-euler-js-problem-3
*/

(function () {
  function calculate(n) {
    var factors = [],
        d = 2;

    while (n > 1) {
      while (n % d === 0) {
        factors.push(d);

        n /= d;
      }

      d += 1;
    }

    console.log(Math.max.apply(null, factors));
  }

  console.time('calculate');

  calculate(600851475143);

  console.timeEnd('calculate');
}());

(function () {
  function calculate(n) {
    var factors = [],
        d = 2;

    while (n > 1) {
      while (n % d === 0) {
        factors.push(d);

        n /= d;
      }

      if (d === 2) {
        d += 1;
      } else {
        d += 2;
      }
    }

    console.log(Math.max.apply(null, factors));
  }

  console.time('calculate');

  calculate(600851475143);

  console.timeEnd('calculate');
}());
