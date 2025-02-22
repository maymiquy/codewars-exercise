// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

const mCountSheeps = (sheep) => sheep.reduce((result, i) => (i) ? result += 1 : result, 0)

const countSheeps = (sheep) => sheep.filter(Boolean).length;


console.log(mCountSheeps([true, true, true, false, true, true, true, true]))
console.log(countSheeps([true, true, true, false, true, true, true, true]))
