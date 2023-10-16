const isPrime = num => {
    if (num <= 1) return false;
    if (num === 2 || num === 3) return true;
    if (num % 2 === 0) return false;
        
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if(num % i === 0) return false;
    }

    return true;
}

const smallestMult = num => {
    let smallest = 1;
    for (let i = 2; i <= num; i++) {
        if (isPrime(i)) {
            let factor = i;
            while (factor * i <= num) {
                factor *= i;
            }
            smallest *= factor;
        }        
    }
    return smallest;
}