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

function shortestCellPath(grid, sr, sc, tr, tc) {
  let q = [];
  q.unshift([sr, sc, 0]);
  let seen = new Set();
  seen.add(`${sr}, ${sc}`);
  let rLength = grid.length, cLength = grid[0].length;

  while (q.length) {
      let [r, c, depth] = q.pop()
      if (r === tr && c === tc) return depth;

      [[r + 1, c], [r - 1, c], [r, c + 1], [r, c - 1]].forEach((pos) => {
          [nr, nc] = pos;
          let seenKey = `${nr},${nc}`;
          if (nr >= 0 && nr < rLength && nc >= 0 && nc < cLength && grid[nr][nc] === 1 && !seen.has(seenKey)) {
              q.unshift([nr, nc, depth + 1]);
              seen.add(seenKey);
          }
      })
  }

  return -1;
}

/* 
  Time and Space O(row * col). worst case we check every spot and store every spot in seen set
*/