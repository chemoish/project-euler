/*
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.

http://jsperf.com/project-euler-js-problem-4
*/

(function () {
  var a = 999,
      b = 999,
      c,
      min = 100,
      palindromes = [];

  function isPalindrone(string) {
    var characters = string.split(''),
        half = Math.floor(string.length / 2),
        first_half = characters.splice(0, half).join(''),
        second_half = characters.splice(-half, half).reverse().join('');

    return first_half === second_half
  }

  function calculate() {
    while (a > min) {
      c = b;

      while (c > min) {
        var multiple = (a * c).toString();

        if (isPalindrone(multiple)) {
          palindromes.push(multiple);
        }

        c -= 1;
      }

      a -= 1;
      b -= 1;
    }

    console.log(Math.max.apply(null, palindromes));
  }

  console.time('calculate');

  calculate();

  console.timeEnd('calculate');
}());

(function () {
  var a = 999,
      b = 999,
      c,
      min = 100,
      palindromes = [];

  function isPalindrone(string) {
    var characters = string.split(''),
        half = Math.floor(string.length / 2),
        first_half = characters.splice(0, half).join(''),
        second_half = characters.splice(-half, half).reverse().join('');

    return first_half === second_half
  }

  function calculate() {
    while (a > min) {
      c = b;

      while (c > min) {
        var multiple = (a * c).toString();

        if (isPalindrone(multiple)) {
          palindromes.push(multiple);

          if (c > min) {
            min = c;
          }
        }

        c -= 1;
      }

      a -= 1;
      b -= 1;
    }

    console.log(Math.max.apply(null, palindromes));
  }

  console.time('calculate');

  calculate();

  console.timeEnd('calculate');
}());

(function () {
  var a = 999,
      b = 999,
      c,
      min = 100,
      palindromes = [];

  function isPalindrone(string) {
    var n = 0,
        length = string.length - 1,
        half = Math.ceil(length / 2);

    while (n < half) {
      if (string[n] !== string[length - n]) {
        return false;
      }

      n += 1;
    }

    return true;
  }

  function calculate() {
    while (a > min) {
      c = b;

      while (c > min) {
        var multiple = (a * c).toString();

        if (isPalindrone(multiple)) {
          palindromes.push(multiple);

          if (c > min) {
            min = c;
          }
        }

        c -= 1;
      }

      a -= 1;
      b -= 1;
    }

    console.log(Math.max.apply(null, palindromes));
  }

  console.time('calculate');

  calculate();

  console.timeEnd('calculate');
}());
