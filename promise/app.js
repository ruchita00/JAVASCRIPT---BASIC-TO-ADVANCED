//implement promise.all

function customPromise1(text, time) {
  return new Promise((resolve, reject) => {
    resolve(text);
  }, time);
}

function customPromise(promises) {
  let result = [];
  return new Promise((resolve, reject) => {
    promises.forEach(p, (index) => {
      p.then((res) => {
        result.push(res);
        if (index === promises - 1) {
          resolve(promises);
        }
      }).catch((error) => console.log(error));
    });
  });
}

const newPorm = Promise.all([
  customPromise1("hello", 1000),
  Promise.resolve("jo", 2000),
]).then((res) => console.log(res));
