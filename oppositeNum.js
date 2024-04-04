// Very simple, given a number (integer / decimal / both depending on the language), find its opposite (additive inverse).

// Examples:

// 1: -1
// 14: -14
// -34: 34

const opposite = (num) => num !== 0 ? num * -1 : 0;

// function opposite(number) {
//     return (-number);
// }

// const opposite = n => n * -1

console.log(opposite(-3))