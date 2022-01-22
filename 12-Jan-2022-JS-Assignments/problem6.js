function sumOfDigitsFrom1toN(n) {
    let result = 0;
    for (let i = 1; i <= n; i++) {
        result += i;
    }
    return result;
}

console.log(sumOfDigitsFrom1toN(5));