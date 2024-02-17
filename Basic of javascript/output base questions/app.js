//setTimeout

function a() {
  for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i);
    }, i * 1000);
  }
}

a();

//i
//i
//i = reference of i variable
//settimoutfinished
//js engine referening the current value last time the current value is 3

//3
//3
//3
//output is : 3  => 3times
//because var doesnt have block scope

//how to solve this problem => using let

function a() {
  for (let i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i);
    }, i * 1000);
  }
}

a();

// if you are not allow to used let used var and solve this problem

//using closure

function a() {
  for (let i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i);
    }, i * 1000);
  }
}

const n = a();
console.log(n);
















