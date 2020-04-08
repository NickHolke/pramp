function pancakeSort(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let currMaxIdx = findMaxIndex(arr, i);
    flip(arr, currMaxIdx + 1);
    flip(arr, i + 1);
  }
  return arr;
}

function flip(arr, k) {
  //create two pointers at start and end of flip
  let p1 = 0, p2 = k - 1;
  
  while (p1 < p2) {
    let temp = arr[p1];
    arr[p1] = arr[p2];
    arr[p2] = temp;
    p1++;
    p2--;
  }
}

function findMaxIndex(arr, endIdx) {
  let maxIdx = 0;
  for (let i = 1; i <= endIdx; i++) {
    if (arr[i] > arr[maxIdx]) {
      maxIdx = i;
    }
  }
  return maxIdx;
}