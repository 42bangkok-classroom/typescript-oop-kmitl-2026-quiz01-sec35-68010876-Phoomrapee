const balance = Number(process.argv[2]);
const amount = Number(process.argv[3]);

if (Number.isNaN(balance) || Number.isNaN(amount)) {
    process.exit(0);
}

if (amount > balance) {
    console.log('Insufficient balance');
} else if (amount > 5000) {
    console.log('Exceeds per-withdrawal limit');
} else {
    console.log('Withdrawal approved');
}


