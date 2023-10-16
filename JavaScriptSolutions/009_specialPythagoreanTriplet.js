const findPythagoreTriplet = sum => {
    for (let a = 1; a <= Math.floor((sum / 3) - 1); a++) {
        let c = sum - (2 * a ) - 1;
        for (let b = (a + 1); b < c; b++) {
            if ((a * a) + (b * b) === (c * c)) {
                return [a, b, c];
            }
            c--;
        }
    }
    return [0];
}

const specialPythagoreanTriplet = n => findPythagoreTriplet(n).reduce((a, b) => a*b, 1);