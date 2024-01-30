const ascOrder = (n) => parseInt(String(n).split('').sort((a, b) => a - b).join(''));

console.log(ascOrder(8789654132));