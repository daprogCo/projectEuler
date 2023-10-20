const digitFibonacci = n => {
    let val1 = BigInt(1);
    let val2 = BigInt(1);
    let i = 2;
    while(true) {
        i++;
        let val = val1 + val2;
        if (val.toString().length >= n) return i;
        val1 = val2;
        val2 = val
    }
}
 