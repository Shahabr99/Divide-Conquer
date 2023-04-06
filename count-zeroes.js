function countZeroes(arr) {
  return arr.reduce((acc, curr) => {
    if (curr === 0) {
      return (acc += 1);
    } else {
      return acc;
    }
  }, 0);
}
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
//       count++;
//     }
//   }
//   return count;
// }
// module.exports = countZeroes;

countZeroes([1, 1, 1, 1, 0, 0]); // 2
countZeroes([1, 0, 0, 0, 0]); // 4
countZeroes([0, 0, 0]); // 3
countZeroes([1, 1, 1, 1]); // 0
