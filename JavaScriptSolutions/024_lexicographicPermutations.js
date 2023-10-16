const lexicographicPermutations = pos => {
    let arrVal = [0, 1, 2, 3, 4, 5, 6, 7 ,8, 9];
    let totalPerms = arrVal.reduce((acc, cur) => acc * (cur + 1), 1);
    let actualPerm = "";
    for (let i = 10; i >= 1; i--) {
        totalPerms /= i;
        under = totalPerms;
        for (let j = 0; j < arrVal.length; j++) {
            if (pos < under) {
                actualPerm += arrVal[j];
                arrVal = arrVal.filter(n => n != arrVal[j]);
                pos -= totalPerms * j;
                break;
            } else under += totalPerms; 
        }
    }
    return parseInt(actualPerm);
}