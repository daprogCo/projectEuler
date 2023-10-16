const listValues = (grid, posX, posY, range) => {
    let arr = [];
    let pattern = [[1, 0], [1, 1], [0, 1], [1, -1]];
    for (const dir of pattern) {
        let serie = [];
        for (let i = 0; i < range; i++) {
            let x = posX + (i * dir[0]);
            let y = posY + (i * dir[1]);
            if (x >= 0 && y >= 0 && x < grid[0].length && y < grid.length) {
                serie.push(grid[x][y]);   
            }
        }
      if (serie.length == range) arr.push(serie);   
    }
    return arr;
}

const largestGridProduct = (grid, range = 4) => {
    let rowSize = grid.length;
    let largest = 0;
    for (let i = 0; i < rowSize; i++) {
        for (let j = 0; j < rowSize; j++) {
            let lines = listValues(grid, i, j, range);
            for (const line of lines) {
               let product = line.reduce((a,b) => a * b, 1);
               largest = largest > product ? largest : product;
            }
        }
    }
    return largest;
}