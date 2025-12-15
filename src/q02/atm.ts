const balanceInput = process.argv[2];
const amountInput = process.argv[3];

if (
    balanceInput === undefined ||
    amountInput === undefined ||
    balanceInput.trim() === '' ||
    amountInput.trim() === ''
) {
    console.log('Invalid Input');
    process.exit(0);
}

const balance = Number(balanceInput);
const amount = Number(amountInput);

if (Number.isNaN(balance) || Number.isNaN(amount)) {
    console.log('Invalid Input');
    process.exit(0);
}

if (amount > balance) {
    console.log('Insufficient balance');
} else if (amount > 5000) {
    console.log('Exceeds per-withdrawal limit');
} else {
    console.log('Withdrawal approved');
}
