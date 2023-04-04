console.log(remainder(1, 3));
console.log(remainder(3, 4));
console.log(remainder(-9, 45));
console.log(remainder(5, 5));

function remainder(a, b) {
    let c = a;
    let negative = false;

    if (a < 0) {
        negative = true;
        c = a * -1;
    }

    if (negative) {
        return -1 * (c % b);
    }
    else {
        return c % b;
    }
}
