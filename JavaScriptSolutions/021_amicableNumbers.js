const sumFactors = n => {
    let sum = 1;
    for (let i = 2; i * i <= n; i++) {
        if (!(n % i)) sum += i == n / i ? i : i + n /i;
    }
    return sum;
}

const sumAmicableNum = n => {
    let sum = 0;
    for (let i = 1; i < n; i++) {
        let j = sumFactors(i);
        if (i != j && i == sumFactors(j)) sum += i
    }
    return sum;
}
