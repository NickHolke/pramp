function shortestCellPath(grid, sr, sc, tr, tc) {
  let total = -1;
  let colLength = grid[0].length;
  let rowLength = grid.length;
  
  let innerRec = (row, col, steps) => {
     if (row === tr && col === tc) {
       if (total === -1 || steps < total) {
         total = steps;
       }
       return;
     }
    
    if (col < colLength - 1 && grid[row][col + 1] === 1) {
      grid[row][col] = 0;
      innerRec(row, col + 1, steps + 1)
      grid[row][col] = 1;
    }
    
    if (col > 0 && grid[row][col - 1] === 1) {
      grid[row][col] = 0;
      innerRec(row, col - 1, steps + 1)
      grid[row][col] = 1;
    }
    
    if (row < rowLength - 1 && grid[row + 1][col] === 1) {
      grid[row][col] = 0;
      innerRec(row + 1, col, steps + 1)
      grid[row][col] = 1;
    }
    
    if (row > 0 && grid[row - 1][col] === 1) {
      grid[row][col] = 0;
      innerRec(row - 1, col, steps + 1)
      grid[row][col] = 1;
    }
    
  }
  
  innerRec(sr,sc,0);
  return total;

	// your code goes here
}