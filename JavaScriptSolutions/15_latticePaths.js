const latticePaths = (x, y = x) => {
    let grid = [[0]];
    if (x <= 0 || y <= 0) {
        return grid[0][0];  
    }
    if (!Number.isInteger(x) || !Number.isInteger(y)) {
        return undefined; 
    }
    for (let i = 0; i <= y; i++) {
        if (i > 0) {
            grid.push([1]);   
        }
        for (let j = 1; j <= x; j++) {
            if (i === 0) {
                grid[0].push(1);
            } else {
                let value = grid[i - 1][j] + grid[i][j-1];
                grid[i].push(value);
            }
        }
    }
    return grid[y][x];
}