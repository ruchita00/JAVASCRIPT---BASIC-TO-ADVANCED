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

function resverseStr(str) {
  str = str + " ";
  let str1 = "";
  let newString = "";
  for (let i = 0; i < str.length; i++) {
    str1 = str[i] + str1;
    if (str[i] === " ") {
      newString = newString + str1;
      str1 = "";
    }
  }
  console.log(newString);
  return newString;
}

function resversenewString(str) {
  str = str + " ";
  let str1 = "";
  let result = "";

  for (let i = 0; i < str.length; i++) {
    str1 = str[i] + str1;
    if (str[i] === " ") {
      result = result + str1;
      str1 = "";
    }
  }
  return result;
}

console.log(resversenewString("hello wrold"));
