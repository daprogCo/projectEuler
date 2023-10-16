const abundant = n => {
    if (n <= 1) return false;
    let sum = 1;
    for (let i = 2; i * i <= n; i++) {
        if (!(n % i)) sum += i == n / i ? i : i + n /i;
    }
    return sum > n;
}

const sumOfNonAbundantNumbers = num => {
    const abundants = new Array(num + 1).fill(false).map(
        (val, i) => abundant(i));
    const sums = new Array(num + 1).fill(true);
    
    let sum = 0;
    for (let i = 1; i < sums.length; i++) {
        if (sums[i]) sum += i;
        if (!abundants[i]) continue;
        for (let j = 1; j <= i; j++) {
            if (abundants[j]) sums[i + j] = false;
        }
    }
    return sum;
}