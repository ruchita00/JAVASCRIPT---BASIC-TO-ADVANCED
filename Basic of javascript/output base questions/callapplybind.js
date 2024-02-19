//explain call

var sample = {
  name: "ruchi s",
  hello: function (thing) {
    console.log(this.name + " says hello " + thing);
  },
};

var data = {
  name: "riya",
};
sample.hello.call(data, "world");

//takes the context for particular function and argment which we
//pass inside the function

//explain apply

var person = {
  name: "priya",
  hello: function (thing) {
    console.log(this.name + " says hello " + thing);
  },
};

var othername = {
  name: "tina",
};

person.hello.apply(othername, ["world"]);

//explain bind :
//only take context and it will return a complete new function with
//context

var dummyData = {
  name: "aditya",
  hello: function (thing) {
    console.log(this.name + " says hello " + thing);
  },
};

var namste = {
  name: "priyanka",
};

let newBindData = dummyData.hello.bind(namste);

newBindData("world");

for (var i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
