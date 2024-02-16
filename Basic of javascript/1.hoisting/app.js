//Hoisting in  var

getName();
console.log(x);
console.log(getName);

var x = 7;

function getName() {
  console.log("Hello javascript");
}

/**
 * output is : 
 * Hello javascript
 * undefined
 * function getName() {
  console.log("Hello javascript");
}

 */
