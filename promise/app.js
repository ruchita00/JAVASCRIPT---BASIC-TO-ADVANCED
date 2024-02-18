//implement promise.all

function showText(text, time) {
  return new Promise((resolve, reject) => {
    resolve(text);
  }, time);
}

function myPromiseAll(promises) {
  let results = [];
  return new Promise((resolve, reject) => {
    promises.forEach((p, index) => {
      p.then((res) => {
        results.push(res);
        if (index === promises.length - 1) {
          resolve(result);
        }
      }).catch((err) => console.log(err));
    });
  });
}

Promise.all([showText("hello", 1000), Promise.resolve("hi")]).then((res) =>
  console.log(res)
);
