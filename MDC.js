function mdc(a, b) {
    while (b !== 0) {
        const resto = a % b;
        a = b;
        b = resto;
    }
    return Math.abs(a);
}
console.log(mdc(12, 18)); // 6
console.log(mdc(24, 36)); // 12
console.log(mdc(49, 14)); // 7
console.log(mdc(0, 15)); // 15
