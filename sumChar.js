// sum the character in sentence

const sumChar = (a, b) => {
    return b.split(a).length - 1
}

console.log(sumChar('h', 'how many times this character occur the sentence?'))