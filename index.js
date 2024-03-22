function sumSliceDigit(n) {
    let digits = n.toString();
    let pairs = [];

    for (let i = 0; i < digits.length; i += 2) {
        let pair = digits.slice(i, i + 2);
        pairs.push(parseInt(pair));
    }

    return pairs.reduce((a, b) => a + b, 0);

}

function dda(n) {
    return "0".repeat(n - 1) + "1";
}

function modulusFloor(n, m) {
    return Math.floor(m / n) * n;
}

const stringToNumber = str => Number(str);
// const stringToNumber = str => parseInt(str);

console.log(stringToNumber('1234'));

const century = (year) => Math.ceil(year / 100);

console.log(century(1705));

const sumTwoSmallestNumbers = (numbers) => numbers.sort((a, b) => a - b).slice(0, 2).reduce((a, c) => a + c);

console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));

const sumChar = (a, b) => {
    return b.split(a).length - 1
}

console.log(sumChar('h', 'how many times this character occur the sentence?'))



const calc = (col, row) => {
    return (col * (row + 1))
}

console.log('result:', calc(3, 5))

function StringChallenge(num) {
    const hours = Math.floor(num / 60);
    const minutes = num % 60;

    return `${hours}:${minutes.toString().padStart(2, '0')}`;
}

console.log(StringChallenge(126));

function MathChallenge(num1, num2) {
    return num2 > num1 ? true : num2 < num1 ? false : -1;
}

console.log(MathChallenge(64, 122))


function ArrayChallenge(strArr) {
    const cache = [];

    for (let char of strArr) {
        const index = cache.indexOf(char);

        if (index === -1) {
            if (cache.length >= 5) {
                cache.shift();
            }
            cache.push(char);
        } else {
            cache.splice(index, 1);
            cache.push(char);
        }
    }

    return cache.join('-');
}

console.log(ArrayChallenge(["A", "B", "A", "C", "A", "B"])); // Output: C-A-B
console.log(ArrayChallenge(["A", "B", "C", "D", "E", "D", "Q", "Z", "C"])); // Output: E-D-Q-Z-C

// Pipe methods 
const sum = n => n + '!!!'
const listen = string => 'hay' + string
const uppercase = string => string.toUpperCase();

const text = "Hello World"

console.log(uppercase(exclaim(listen(text))))