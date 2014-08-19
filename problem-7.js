/*
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?
*/

(function () {
  var position = 10001,
      prime_numbers = [2],
      count = prime_numbers.length,
      number = 3;

  function isPrime(number) {
    for (var j = 1, length = prime_numbers.length; j < length; j++) {
      if (number % prime_numbers[j] === 0) {
        return false;
      }
    }

    return true;
  }

  function findNthPrimeNumber(position) {
    while (count < position) {
      if (isPrime(number)) {
        prime_numbers.push(number);

        count += 1;
      }

      number += 2;
    }

    console.log(Math.max.apply(null, prime_numbers));
  }

  console.time('findNthPrimeNumber');

  findNthPrimeNumber(position);

  console.timeEnd('findNthPrimeNumber');
}());
