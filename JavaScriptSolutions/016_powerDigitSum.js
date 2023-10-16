const bigPower = (num, exp) => {
    let big = BigInt(1);
    for (let i = 1; i <= exp; i++) {
        big *= BigInt(num);
    }
    return big;
}

const bigStrSum = str => {
    let sum = 0
    for (let i = 0; i < str.length; i++) {
        sum += parseInt(str[i]); 
    }
    return sum; 
}

const powerDigitSum = num => bigStrSum(bigPower(2, num).toString());
