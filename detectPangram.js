// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.


function pangram(string) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const lowercaseString = string.toLowerCase();

    for (let char of alphabet) {
        if (!lowercaseString.includes(char)) {
            return false;
        }
    }

    return true;
}

console.log(pangram('The quick brown fox jumps over the lazy dog.'));


const isPangram = (string) => [...'abcdefghijklmnopqrstuvwxyz'].every(char => string.toLowerCase().includes(char));

console.log(isPangram('The quick brown fox jumps over the lazy dog.'));