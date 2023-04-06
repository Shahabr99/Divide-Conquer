function sortedFrequency(arr, val) {
  return arr.reduce((acc, curr) => {
    if (curr === val) {
      return acc++;
    } else {
      return acc;
    }
  }, 0);
}

// module.exports = sortedFrequency;
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2)); // 4
sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3); // 1
sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1); // 2
sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4); // -1
