//composition polyfill

function addFive(a) {
  return a + 5;
}

function substractTwo(a) {
  return a - 2;
}

function multiplyFour(a) {
  return a * 4;
}

//compose evalute from right to left
//polyfill for compose method

const compose = (...functions) => {
  return (args) => {
    return functions.reduceRight((arr, fn) => fn(arr), args);
  };
};

const evalute = compose(addFive, substractTwo, multiplyFour);

console.log(evalute(5));

//flat function

let arr = [
  [1, 2],
  [3, 4],
  [5, 6, [7, 8], 9],
  [10, 11, 12],
];

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

console.log(customFlat(arr, 5));

// explain the call method

const sample = {
  name: "ruchi",
  hello: function (inter) {
    console.log(this.name + " Says Hello " + inter);
  },
};

const newSample = {
  name: "tina",
};

sample.hello.call(newSample, "world");

//explain the apply

sample.hello.apply(newSample, ["world"]);

const newBind = sample.hello.bind(newSample);

newBind("world");
