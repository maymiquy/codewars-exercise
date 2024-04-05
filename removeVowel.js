// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

// function disemvowel(str) {
//     let result = '';
//     for (let i = 0; i < str.length; i++) {
//         if (!/[aeiou]/i.test(str[i])) {
//             result += str[i];
//         }
//     }
//     return result;
// }

// function disemvowel(str) {
//     return str.split('').filter(char => !/[aeiouAIUEO]/i.test(char)).join('');
// }


// function disemvowel(str) {
//     const vowels = 'aeiou';
//     return str
//         .split('')
//         .filter(letter => !vowels.includes(letter.toLowerCase()))
//         .join('');
// }

const disemvowel = (str) => str.replace(/[aeiouAIUEO]/gi, '');

console.log(disemvowel('This website is for losers'));
