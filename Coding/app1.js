//find the flat

let arr = [
  [1, 2],
  [3, 4],
  [5, 6, [7, 8], 9],
  [10, 11, 12],
];

const customFlat = (arr, depth = 1) => {
  let result = [];
  arr.forEach((arr) => {
    if (Array.isArray(arr) && depth > 0) {
      result.push(...customFlat(arr, depth - 1));
    } else {
      result.push(arr);
    }
  });
  return result;
};

console.log(customFlat(arr, 2));

//find the squre of element in asending order

const list = [0, 9, 8, 7, 99, 88, 9000];

let res = [];
for (let i of list) {
  res.push(i * i);
}

for (let i = 1; i < list.length; i++) {
  if (res[i] < res[i - 1]) {
    res[i] = res[i] + res[i - 1];
    res[i - 1] = res[i] - res[i - 1];
    res[i] = res[i] - res[i - 1];
    i = 0;
  }
}
console.log(res);

// reverse str
function reverse(str) {
  str = str + " ";
  let str1 = "";
  let res = "";

  for (let i = 0; i < str.length; i++) {
    str1 = str[i] + str1;
    if (str[i] === " ") {
      res = res + str1;
      str1 = " ";
    }
  }
  return res;
}

console.log(reverse("hello world"));

//find the prime number

const num = prompt("enter the number");
if (num == 1) {
  console.log("nither prime or convice");
} else if (num < 1) {
  console.log("prime number is not possible");
} else {
  for (i = 2; i < num; i++) {
    if (num % i == 0) {
      var res1 = `${num} isnot prime number`;
      break;
    } else {
      var res1 = console.log("prime number");
    }
  }
  console.log(res);
}

//factorial
let fact = 1;
const num1 = prompt("entre the number");
if (num < 0) {
  console.log("fact is not possible");
} else {
  for (let i = 1; i <= num; i++) {
    fact = fact * i;
  }
  console.log(`${fact} is ${num}`);
}
