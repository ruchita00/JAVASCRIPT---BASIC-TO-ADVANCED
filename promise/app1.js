function showText(text, time) {
  return new Promise((resolve, reject) => {
    resolve(text);
  }, time);
}
//polyfill for promise

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

Promise.all([showText("hello", 1000), Promise.resolve("hi", 1000)]).then(
  (res) => console.log(res)
);
