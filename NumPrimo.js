function ehPrimo(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(ehPrimo(2));  // true
console.log(ehPrimo(7));  // true
console.log(ehPrimo(9));  // false
console.log(ehPrimo(1));  // false