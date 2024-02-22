//1find the prime number

// const number = prompt("enter the number");

// if (number == 1) {
//   console.log("neither composite or prime");
// } else if (number < 1) {
//   console.log("prime number is not possible");
// } else {
//   for (let i = 2; i < number; i++) {
//     if (number % 2 == 0) {
//       var res = `${number} is not prime number`;
//       break;
//     } else {
//       var res = `${number} is prime number`;
//     }
//   }
//   console.log(res);
// }

// //2fact

// let fact = 1;
// const num = prompt("enter the number");
// if (num == 1) {
//   console.log("fact is not possible");
// } else {
//   for (let i = 1; i <= number; i++) {
//     fact = fact * i;
//   }
//   console.log(fact);
// }

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

const numbs = [2, 3, 4, 5, 9, 7, 96];
const reutl = findminmax(numbs);
console.log(reutl.min, reutl.max);

//proto type is inherit the properties and method from other objects

//find the second largets and secound small num

function findSmall(arr) {
  if (arr.length < 2) {
    return "array should be grather than 2";
  }

  let small = Infinity;
  let secondSmall = Infinity;
  let large = -Infinity;
  let secondLarge = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < small) {
      secondSmall = small;
      small = arr[i];
    } else if (arr[i] < secondSmall && arr[i] !== small) {
      secondSmall = arr[i];
    }

    if (arr[i] > large) {
      secondLarge = large;
      large = arr[i];
    } else if (arr[i] > secondLarge && arr[i] !== large) {
      secondLarge = arr[i];
    }
  }
  if (secondSmall === Infinity) {
    return "no element found";
  }
  if (secondLarge === -Infinity) {
    return "no element found";
  }
  return { secondSmall, secondLarge };
}
const nums = [12, 3, 4, 5, 6];
const n = findSmall(nums);
console.log(n.secondLarge, n.secondSmall);

//polyfill for map

Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(this[i], i, this);
  }
  return temp;
};

Array.prototype.myFiter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      temp.push(this[i]);
    }
  }
  return result;
};

Array.prototype.myReduce = function (initialValue, cb) {
  var accumulator = initialValue;

  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? accumulator(cb(this[i], i, this)) : this[i];
  }
  return accumulator;
};

function outer() {
  const s = "hi";

  function inner() {
    console.log(s);
  }
  return inner;
}

const inner = outer()();

//currying
// curryign takes multiple argmenu and split them into single arge=munt function

//currying is the technique whicj takes multiple arg of function rach function takes
//single arg

//conevrt muilple argment and split them as single arg func

//currying takes mjiltpel argmjuent and split them into each arg func

let mul = function (x, y) {
  console.log(x * y);
};

let na = mul.bind(this, 2);
na(2);

let newcl = function (x) {
  return function (y) {
    console.log(x * y);
  };
};

let news = newcl(2);
news(9);

//explain call apply bind method

var person = {
  naem: "tine",
  hello: function (thigs) {
    console.log(this.name + " say hello " + thigs);
  },
};

othername = {
  name: "pooja",
};

person.hello.call(othername, "world");

person.hello.apply(othername, ["world"]);

const hh = person.hello.bind(othername);
hh("world");

for (var i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

function debounce(callback, delay) {
  let timer = null;

  return () => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(callback, delay);
  };
}
function getapidata() {
  console.log("calling api");
}

const resdebo = debounce(getapidata, 1000);
console.log(resdebo());

function debounde(callback, delay) {
  let timer = null;
  return () => {
    if (timer) clearInterval(timer);
    timer = setTimeout(callback, delay);
  };
}

function getdata() {
  console.log("calling api");
}
