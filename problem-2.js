/*
Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
*/

(function () {
  var old_value = 1,
      middle_value,
      new_value = 2,
      sum = 0;

  function fibonacci() {
    while(old_value < 4000000) {
      if (old_value % 2 === 0) {
        sum += old_value;
      }

      middle_value = new_value;

      new_value += old_value;

      old_value = middle_value;
    }

    console.log(sum);
  }

  console.time('fibonacci');

  fibonacci();

  console.timeEnd('fibonacci');
}());
