const foobar = +process.argv[2];
if (Number.isNaN(foobar)||foobar <=1) {
    console.log('Invalid Input');
}
for (let i = 1; i <= foobar; i++) {
    if (i % 21 === 0) {
        console.log("FooBar");
    } else if (i % 3 === 0) {
        console.log("Foo");
    } else if (i % 5 === 0) {
        console.log("Bar");
    } else {
        console.log(i);
    }
}
