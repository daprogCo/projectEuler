const countingSundays = (firstYear, lastYear) => {
    const leap = year => {
        if (!(year % 100)) return year % 400 == 0 ? true : false;
        return year % 4 == 0 ? true : false;
    }
    const months = year => [31, leap(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const newYear = year => {
        let days = 1;
        for (let y = 1900; y < year; y++) {
            days += leap(y) ? 366 : 365;
        }
        return days;
    }
    let count = 0;
    let firstDay = newYear(firstYear);
    while (firstYear <= lastYear) {
        for (let m = 0; m < months(firstYear).length; m++) {
            if (!(firstDay % 7)) count++;
            firstDay += months(firstYear)[m];
        }
        firstYear++;
    }
    return count;
}