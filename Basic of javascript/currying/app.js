//what is currying?

//currying convert the function which takes multiple argument of function each function takes single argument
//curring takes multiple argment and split them into single argument function

//using bind method

let mulitply = function (x, y) {
  console.log(x * y);
};

let newMu = mulitply.bind(this, 2);
newMu(2);
//using closure

let newClo = function (x) {
  return function (y) {
    console.log(x * y);
  };
};

let newCl = newClo(2);
newCl(8);

//currying is techinque convert function which takes mulitple argument of function
// each takes a single arg

//..currying takes multiple arg and split them into signle arg fucntion

function customFlat(arr, depth = 1) {
  let result = [];
  arr.forEach((arr) => {
    if (Array.isArray(arr) && depth > 0) {
      result.push(...customFlat(arr, depth - 1));
    } else {
      result.push(arr);
    }
  });
  return result;
}
let array = [
  [1, 2],
  [3, 4],
  [5, 6, [7, 8], 9],
  [10, 11, 12],
];

console.log(customFlat(array, 2));

//convert into reversestr

function reverseStr(str) {
  str = str + " ";
  let result = "";
  let str1 = "";

  for (let i = 0; i < str.length; i++) {
    str1 = str[i] + str1;
    if (str[i] === " ") {
      result = result + str1;
      str1 = "";
    }
  }
  return result;
}

console.log(reverseStr("hello world"));
