const oneToNine = str => {
    if (str == "0") return 0;
    if (["1", "2", "6"].includes(str)) return 3;
    if (["4", "5", "9"].includes(str)) return 4;
    return 5;
}

const tens = str => {
    if (str == "0") return 3;
    if (str == "7") return 9;
    if (str == "1" || str == "2") return 6;
    if (str == "5" || str == "6") return 7;
    return 8;
}

const overTens = str => {
    if (str == "7") return 7;
    if (str == "4") return 5;
    if (str == "5" || str == "6") return 5;
    return 6; 
}

const strThousand = num => {
    let str = num.toString();
    while (str.length != 4) str = "0" + str;
    return str; 
}

const letterCount = str => {
    let count = 0;
    if (str[0] != "0") count = 8 + oneToNine(str[0]);
    if (str[1] != "0") count += 7 + oneToNine(str[1]);
    if (str[2] == "0" && str[3] == "0") return count;
    if (count != 0) count += 3;
    if (str[2] == "1") count += tens(str[3]);
    else if (str[2] == "0") count += oneToNine(str[3]);
    else count += overTens(str[2]) + oneToNine(str[3])
    return count;
}

const numberLetterCounts = limit =>  {
    let count = 0;
    for (let i = 1; i <= limit; i++) {
        let str = strThousand(i);
        count += letterCount(str);
    }
    return count;
}
