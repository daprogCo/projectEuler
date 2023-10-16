const isPalindrome = str => {
    return str === str.split("").reverse().join("");
}

const largestPalindromeProduct = digit => {
    let max = 0;
    let min = 0.1;
    for (let i = 1; i <= digit; i++) {
        min *= 10;
        max = max + (9 * min);
    }
    for (let num = max * max; num > min * min; num--) {
        if(isPalindrome(num.toString())){
            for (let i = max; i >= min; i--) {
                if (num % i === 0 && (num / i) <= max) {
                    return num;
                }   
            }
        }
    }
}