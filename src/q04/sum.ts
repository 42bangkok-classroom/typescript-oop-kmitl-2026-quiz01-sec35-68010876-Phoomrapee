const n = Number(process.argv[2]);

if (Number.isNaN(n) || n < 0) {
    console.log('Invalid Input');
}
else {
let sum = 0;

for (let i = 1; i <= n; i++) {
    sum += i;
}

console.log(sum);
}