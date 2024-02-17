let arr = [
  [1, 2],
  [3, 4],
  [5, 6, [7, 8], 9],
  [10, 11, 12],
];

let flatternArray = [].concat(...arr);
console.log(flatternArray);

console.log(arr.flat(2));

function customFlat(arr, depth = 1) {
  let result = [];
  arr.forEach((ar) => {
    if (Array.isArray(ar) && depth > 0) {
      result.push(...customFlat(ar, (depth = 1)));
    } else {
      result.push(ar);
    }
  });
  return result;
}

console.log(customFlat(arr));
