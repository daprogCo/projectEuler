const divisibleTriangleNumber = n => {
    let sum = 1;
    let divs = 1;
    for (let i = 2; divs < n; i++) {
        sum += i;
        divs = 2;
        let j = 2;
        while (j * j < sum) {
            if (sum % j == 0) divs += 2;
            j++;
        }
        if (j * j == sum) divs++;
    }
    return sum;
}