const largestPrimeFactor = num => {
    for (let i = 2; i * i <= num; i++) {
        while (num % i === 0 && num != i) num /= i;
    }
    return num;
}
