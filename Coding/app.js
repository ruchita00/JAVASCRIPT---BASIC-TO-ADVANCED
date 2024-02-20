const arrNumber = [1, 2, 3, 565, 7, 7, 8, 9, 9, 8];

//find the duplicates number from array

const duplicates = arrNumber.filter(
  (ele, index, arr) => arr.indexOf(ele) !== index
);

console.log(duplicates);

//find the sum of all array

const newSum = arrNumber.reduce((acc, curr) => {
  return acc + curr;
}, 0);
console.log(newSum);

//find the even and odd nuber

const even = arrNumber.filter((item) => {
  return item % 2 === 0;
});

const odd = arrNumber.filter((item) => {
  return item % 2 !== 0;
});

console.log(even);
console.log(odd);

//find the missing value in array

const newArr = [1, 2, 3, 4, 5, 6, 9, 10];

const missingArray = [];

const missingValue = (arr) => {
  const minValue = Math.min(...arr);
  const maxValue = Math.max(...arr);

  for (let i = minValue; i < maxValue; i++) {
    if (arr.indexOf(i) < 0) {
      missingArray.push(i);
    }
  }
  return missingArray;
};

console.log(missingValue(newArr));

//find the factorial of js

// 5!=1*2*3*4*5=120

// const inputNum = prompt("enter the number");

// var fact = 1;

// if (inputNum < 0) {
//   console.log(`factorial of ${inputNum} is not possible`);
// } else {
//   for (let i = 1; i <= inputNum; i++) {
//     fact = fact * i;
//   }
//   console.log(`factorila of ${inputNum} is ${fact}`);
// }

// const number = prompt("enter the number");

// if (number == 1) {
//   console.log(`${number} is niether prime or composite`);
// } else if (number < 1) {
//   console.log(`${number} is not possible prime number`);
// } else {
//   for (let i = 2; i < number; i++) {
//     if (number % i == 0) {
//       var res = `${number} is not prime number`;
//       break;
//     } else {
//       var res = `${number} is prime number`;
//     }
//   }
//   console.log(res);
// }

//fact

// const number = prompt("enter the number");
// var fact = 1;
// if (number < 0) {
//   console.log("fact is not possible");
// } else {
//   for (let i = 1; i <= number; i++) {
//     fact = fact * i;
//   }
//   console.log(`${number} is ${fact}`);
// }

//reverse string

function newStr(str) {
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

console.log(newStr("hello world"));
