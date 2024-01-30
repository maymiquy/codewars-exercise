const getSum = (a, b) => (a + b) * (Math.abs(b - a) + 1) / 2;

console.log(getSum(-3, 2));