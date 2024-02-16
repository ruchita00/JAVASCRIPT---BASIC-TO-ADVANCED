//polyfill for map

const data = [1, 2, 3, 4, 5];

Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};

const multiply = data.myMap((data) => data * 2);
console.log(multiply);
