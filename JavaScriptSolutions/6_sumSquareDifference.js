const rangeArr = (test, max, min = 0) => {
    let arr = [];
    for (let i = min; i <= max; i++) {
        if(test(i)) {
            arr.push(i);
        } 
    }
    return arr;
}

const sumArr = arr => arr.reduce((a, b) => a + b, 0);

const sumSquareDifference = num => {
    let range = rangeArr(() => true, num, 1);
    let squareSum = sumArr(range) ** 2;
    let sumSquare = sumArr(range.map(n => n ** 2));
    return squareSum - sumSquare;
}

