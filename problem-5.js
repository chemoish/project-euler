/*
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

(function () {
  var start = 20,
      increment = 20,
      start_range = 1,
      end_range = 20;

  function isDivisible(number) {
    for (var i = end_range; i >= start_range; i--) {
      if (number % i !== 0) {
        return false;
      }
    }

    return true;
  }

  function calculate() {
    while (isDivisible(start) === false) {
      start += increment;
    }

    console.log(start);
  }

  console.time('calculate');

  calculate();

  console.timeEnd('calculate');
}());

(function () {
  var start = 20,
      increment = 20,
      start_range = 11,
      end_range = 20;

  function isDivisible(number) {
    for (var i = end_range; i >= start_range; i--) {
      if (number % i !== 0) {
        return false;
      }
    }

    return true;
  }

  function calculate() {
    while (isDivisible(start) === false) {
      start += increment;
    }

    console.log(start);
  }

  console.time('calculate');

  calculate();

  console.timeEnd('calculate');
}());

(function () {
  var start = 380,
      increment = 380,
      start_range = 11,
      end_range = 18;

  function isDivisible(number) {
    for (var i = end_range; i >= start_range; i--) {
      if (number % i !== 0) {
        return false;
      }
    }

    return true;
  }

  function calculate() {
    while (isDivisible(start) === false) {
      start += increment;
    }

    console.log(start);
  }

  console.time('calculate');

  calculate();

  console.timeEnd('calculate');
}());

(function () {
  var greatest_factor_instances = {},
      number = 1;

  function getPrimeFactors(n) {
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

    return factors;
  }

  function getFactorInstances(factors) {
    var factor_instances = {};

    for (var i = 0, length = factors.length; i < length; i++) {
      var factor = factors[i];

      if (factor_instances[factor] !== undefined) {
        factor_instances[factor].count += 1;
      } else {
        factor_instances[factor] = {
          number: factor,
          count: 1
        };
      }
    }

    return factor_instances;
  }

  function updateGreatestFactorInstances(factor_instances) {
    for (factor_instance in factor_instances) {
      var greatest_factor = greatest_factor_instances[factor_instance],
          current_factor = factor_instances[factor_instance];

      if (greatest_factor === undefined || (greatest_factor !== undefined && current_factor.count > greatest_factor.count)) {
        greatest_factor_instances[factor_instance] = current_factor;
      }
    }
  }

  function calculate() {
    var max = 20,
        min = 11;

    while (max >= min) {
      var factors = getPrimeFactors(max);

      var factor_instances = getFactorInstances(factors);

      updateGreatestFactorInstances(factor_instances);

      max -= 1;
    }

    for (greatest_factor_instance in greatest_factor_instances) {
      var greatest_factor = greatest_factor_instances[greatest_factor_instance];

      number *= Math.pow(greatest_factor.number, greatest_factor.count);
    }

    console.log(number);
  }

  console.time('calculate');

  calculate();

  console.timeEnd('calculate');
}());
