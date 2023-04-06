function sortedFrequency(arr, val) {
  // return arr.reduce((acc, curr) => {
  //   if (curr === val) {
  //     return (acc += 1);
  //   } else {
  //     return acc;
  //   }
  // }, 0);

  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      count++;
    }
    if (arr.indexOf(val) == -1) {
      count = -1;
    }
  }
  return count;
}

// module.exports = sortedFrequency;
sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2); // 4
sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3); // 1
sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1); // 2
sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4); // -1
