const stringToBigInt = str => {
    let bigNumber = BigInt(0);
    while (str.length) {
        if (str.length >= 10) {
            let slice = BigInt(parseInt(str.slice(0, 10)));
            str = str.slice(10);
            for (let i = 0; i < str.length; i++) {
                slice *= BigInt(10);
            }
            bigNumber += slice;
        } else {
            bigNumber += BigInt(parseInt(str))
        }
    }
    return bigNumber;
}

const largeSum = arr => {
    let bigSum = BigInt(0);
    for (let i = 0; i < arr.length; i++) {
        bigSum += stringToBigInt(arr[i]);
    }
    return parseInt(bigSum.toString().slice(0, 10));
}