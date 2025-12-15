const rhombus = +process.argv[2];
if (Number.isNaN(rhombus) || rhombus <= 0) {
    process.exit(0);
}
for (let i = 0; i < rhombus; i++) {
    let row = '';
    for (let s = rhombus - i - 1 ; s > 0; s--) {
        row += ' ';
    }
    for (let j = 0; j < rhombus; j++) {
        row += '*';
    }
    console.log(row);
}