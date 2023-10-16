const longestCollatzSequence = limit => {
    let longest = 0;
    let val = 0;
    for (let i = 1; i < limit; i++) {
        let test = i;
        let length = 0;
        while (test !== 1) {
            if (test % 2) test = 3 * test + 1;
            else test /= 2;
            length++;
        }
        if (length >= longest) {
            longest = length;
            val = i  
        }
    }
    return val;
}