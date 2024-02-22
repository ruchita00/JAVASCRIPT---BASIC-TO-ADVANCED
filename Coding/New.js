//1find the prime number

const number = prompt("enter the number");

if (number == 1) {
  console.log("neither composite or prime");
} else if (number < 1) {
  console.log("prime number is not possible");
} else {
  for (let i = 2; i < number; i++) {
    if (number % 2 == 0) {
      var res = `${number} is not prime number`;
      break;
    } else {
      var res = `${number} is prime number`;
    }
  }
  console.log(res);
}

//2fact

let fact = 1;
const num = prompt("enter the number");
if (num == 1) {
  console.log("fact is not possible");
} else {
  for (let i = 1; i <= number; i++) {
    fact = fact * i;
  }
  console.log(fact);
}

//3reverse str

function reversestr(str) {
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse = reverse + str[i];
  }
  return reverse;
}

console.log(reversestr("hello world"));

//4reverse str of charcters

function reverseChar(str) {
  str = str + " ";
  let str1 = "";
  let result = "";

  for (let i = 0; i < str.length; i++) {
    str1 = str[i] + str1;
    if (str[i] === " ") {
      result = result + str1;
      str1 = " ";
    }
  }
  return result;
}

console.log(reverseChar("hello world"));

//5flat

let arr1 = [
  [1, 2],
  [3, 4],
  [5, 6, [7, 8], 9],
  [10, 11, 12],
];

const customFlat = (arr, depth = 1) => {
  let res = [];
  arr.forEach((arr) => {
    if (Array.isArray(arr) && depth > 0) {
      res.push(...customFlat(arr, depth - 1));
    } else {
      res.push(arr);
    }
  });
  return res;
};

console.log(customFlat(arr1, 2));

//6duplicate element from array

const arrNumber = [1, 2, 3, 565, 7, 7, 8, 9, 9, 8];

const duplicate = arrNumber.filter(
  (ele, index, arr) => arr.indexOf(ele) !== index
);

console.log(duplicate);

//7even odd number

const even = arrNumber.filter((arr) => {
  return arr % 2 === 0;
});

const odd = arrNumber.filter((arr) => {
  return arr % 2 !== 0;
});

console.log(even, odd);

//find the mininum and maximum number

function findminmax(arr) {
  if (arr.length === 0) {
    return `array is empty`;
  }

  let min = arr[0];
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return { min, max };
}

const numbs = [2, 3, 4, 5, 6];
const reutl = findminmax(numbs);
console.log(reutl.min, reutl.max);
