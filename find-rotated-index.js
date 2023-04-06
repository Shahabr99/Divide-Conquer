function findRotatedIndex(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
}

// module.exports = findRotatedIndex;
findRotatedIndex([3, 4, 1, 2], 4); // 1
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8); // 2
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3); // 6
findRotatedIndex([37, 44, 66, 102, 10, 22], 14); // -1
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12); // -1
