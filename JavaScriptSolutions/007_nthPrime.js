const isPrime = num => {
    if (num <= 1) return false;
    if (num === 2 || num === 3) return true;
    if (num % 2 === 0) return false;
        
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if(num % i === 0) return false;
    }

    return true;
}

const nthPrime = rank => {
    let test = 0;
    for (let num = 0; test <= rank; num++) {
        if (isPrime(num)) {
            test++;
            if (test === rank) {
                return num;     
            }
        }
    }
}
