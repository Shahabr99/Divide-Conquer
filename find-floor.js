function findFloor(arr, x) {
  let result = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= x && arr[i] > result) {
      result = arr[i];
    }
  }
  return result;
}
// module.exports = findFloor
findFloor([1, 2, 8, 10, 10, 12, 19], 9); // 8
findFloor([1, 2, 8, 10, 10, 12, 19], 20); // 19
findFloor([1, 2, 8, 10, 10, 12, 19], 0); // -1
