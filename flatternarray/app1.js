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

console.log(customFlat(arr, 2));

//explain bind method

var sampleData = {
  name: "ruchi",
  hello: function (iter) {
    console.log(this.name + " say hello " + iter);
  },
};

var data = {
  name: "pooja",
};

sampleData.hello.call(data, "world");

//explain apply method

var applyData = {
  name: "tina",
  hello: function (inter) {
    console.log(this.name + " say hello " + inter);
  },
};

var newApply = {
  name: "sweety",
};

applyData.hello.apply(newApply, ["world"]);

//explain bind method

var bindData = {
  name: "chiku",
  hello: function (inner) {
    console.log(this.name + " say hello " + inner);
  },
};

var newBind = {
  name: "adu",
};

const newdataofbind = bindData.hello.bind(newBind);

newdataofbind("world");

let arr3 = [
  [1, 2],
  [3, 4],
  [5, 6, [7, 8], 9],
  [10, 11, 12],
];
