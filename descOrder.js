const descOrder = (n) => parseInt(String(n).split('').sort((a, b) => b - a).join(''));

console.log(descOrder(123456789))