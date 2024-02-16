const data = [2, 3, 4, 5, 6, 7];

Array.prototype.myFilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      temp.push(this[i]);
    }
  }
  return temp;
};

const finn = data.myFilter((data) => {
  if (data > 2) {
    console.log(data);
  }
});
