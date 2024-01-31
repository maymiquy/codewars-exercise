// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8

const calculateRowSum = (n) => Array(n).fill().reduce((sum, _, index) => sum + (n * (n - 1)) + 1 + (index * 2), 0);


console.log(calculateRowSum(1));
console.log(calculateRowSum(2));

const rowSumOddNumbers = (n) => (n * (2 * ((n * (n - 1)) + 1) + (n - 1) * 2)) / 2;

console.log(rowSumOddNumbers(1));
console.log(rowSumOddNumbers(2));

const sumOddNumbers = (n) => Math.pow(n, 3);

console.log(sumOddNumbers(1));
console.log(sumOddNumbers(2));

let simpleSumOddNumbers = n => n ** 3;

console.log(simpleSumOddNumbers(1));
console.log(simpleSumOddNumbers(2));