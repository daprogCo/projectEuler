const bigFact = n => {
    let big = BigInt(1);
    for (let i = 1; i <= n; i++) big *= BigInt(i);
    return big;
}

const bigStrSum = str => {
    let sum = 0
    for (let i = 0; i < str.length; i++) {
        sum += parseInt(str[i]); 
    }
    return sum; 
}

const sumFactorialDigits = n => bigStrSum(bigFact(n).toString());