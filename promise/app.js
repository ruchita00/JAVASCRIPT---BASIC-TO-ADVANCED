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

const arr = [1, 2, 3, 4, 5, 6, 0, 7, 8];

function findSecondLargestAndSmallest(arr) {
  if (arr.length < 2) {
    return "Array must have at least two elements.";
  }

  let largest = -Infinity;
  let secondLargest = -Infinity;
  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== largest) {
      secondLargest = arr[i];
    }

    if (arr[i] < smallest) {
      secondSmallest = smallest;
      smallest = arr[i];
    } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
      secondSmallest = arr[i];
    }
  }
  return {
    secondLargest:
      secondLargest === Infinity
        ? "All the element are the same"
        : secondLargest,
    secondSmallest: secondSmallest
      ? "all the element are the same"
      : secondSmallest,
  };
}
