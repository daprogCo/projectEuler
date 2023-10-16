const primeSummation = n => {
    let sum = 0;
    const isPrime = new Array(n + 1).fill(true);
    isPrime[0] = isPrime[1] = false;

    for (let p = 2; p < n; p++) {
        if (isPrime[p]) {
            sum += p;
            for (let i = p * p; i <= n; i += p) {
                isPrime[i] = false;
            }
        }
    }
    return sum;
}