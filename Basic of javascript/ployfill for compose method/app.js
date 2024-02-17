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
    return functions.reduceRight((args, fn) => fn(args), args);
  };
};

const evalute = compose(addFive, substractTwo, multiplyFour);

console.log(evalute(5));
