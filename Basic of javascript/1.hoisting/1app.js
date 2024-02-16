getName();
console.log(x);
console.log(getName);

var x = 7;

var getName = () => {
  console.log("hello JAVASCRIPT");
};

/**
 * getName is array function so it is treated like a variable
 * output will be undefined
 *
 * only in case of pure function it will copy the whole function
 */
