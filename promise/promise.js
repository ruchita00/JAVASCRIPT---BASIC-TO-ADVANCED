//promise:
//promise is object eventually completion or failture of performing js
//asynchronous operation

function shortText(text, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(text);
    }, time);
  });
}

function cusP(promises) {
  let result = [];
  return new Promise((resolve, reject) => {
    promises.forEach((p, index) => {
      p.then((res) => {
        result.push(res);
        if (index === promises - 1) {
          resolve(promises);
        }
      }).catch((error) => console.log(error));
    });
  });
}

const newP = Promise.all([
  cusP("world", 1000),
  Promise.resolve("hi", 2000),
]).then((res) => console.log(res));
