const maximumPathSumII = (triangle) => {
  let init = triangle.length - 2;
  for (let i = init; i >= 0; i--) {
    for (let j = 0; j <= init; j++) {
      triangle[i][j] +=
        triangle[i + 1][j] > triangle[i + 1][j + 1]
          ? triangle[i + 1][j]
          : triangle[i + 1][j + 1];
    }
    init--;
  }
  return triangle[0][0];
};
