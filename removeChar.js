// Remove First and Last Character
// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry about strings with less than two characters.




// const removeChar = (str) => {
//     const arrStr = str.split('')

//     return arrStr.splice(1, arrStr.length -= 1).join('');
// }

// const removeChar = (str) => str.substring(1, str.length - 1);
const removeChar = (str) => str.slice(1, -1);

console.log(removeChar("eloquent"))