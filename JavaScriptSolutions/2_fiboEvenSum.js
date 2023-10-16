const seqFibonacci= max => {
    let test = 0;
    let arr = [1, 2];
    for (let i = 1; test <= max; i++) {
        test = arr[i-1] + arr[i];
        if (test <= max) arr.push(test);
    }
    return arr;
}

const fiboEvenSum = num => seqFibonacci(num).filter(n => !(n % 2)).reduce((a, b) => a + b, 0)