const namesScores = arr => {
    let sorted = arr.map(w => w.toLowerCase()).sort();
    let total = 0;
    let alphabet = " abcdefghijklmnopqrstuvwxyz".split("");
    for (let i = 0; i < sorted.length; i++) {
        let score = 0;
        for (let j = 0; j < sorted[i].length; j++) {
            score += alphabet.indexOf(sorted[i][j])
        }
        total += score * (i + 1)
    }
    return total;
}