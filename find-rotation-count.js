function findRotationCount(arr) {
  let minIndex = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[minIndex]) {
      minIndex = i;
    }
  }
  return minIndex;
}

// module.exports = findRotationCount
findRotationCount([15, 18, 2, 3, 6, 12]); // 2
findRotationCount([7, 9, 11, 12, 5]); // 4
findRotationCount([7, 9, 11, 12, 15]); // 0
