// second largest element in an array

let arr = [1, 2, 3, 4, 9, 6, 8, 7, 5]; // 8-ans

let largest = Number.MIN_VALUE;
let sLargest = Number.MIN_VALUE;
for (let i = 0; i < arr.length; i++) {
  if (largest < arr[i]) {
    sLargest = largest;
    largest = arr[i];
  }
  if (sLargest < arr[i] && largest > arr[i]) {
    sLargest = arr[i];
  }
}
console.log(sLargest);

//using sort

arr = arr.sort((a, b) => a - b).reverse();

console.log(arr[1]); //ologn

function findSecondLargest(arr) {
  let max = -Infinity;
  let secondMax = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      secondMax = max;
      max = arr[i];
    } else if (arr[i] > secondMax && arr[i] !== max) {
      secondMax = arr[i];
    }
  }

  return secondMax;
}

// Example usage:
const array = [10, 5, 20, 8, 15];
// const secondLargest = findSecondLargest(array);
// console.log("Second largest element:", secondLargest); // Output: 15

// function findSecondLargestAndSmallest(arr) {
//   console.log(arr);
//   //   if (arr.length >) {
//   //     return "array must have at least two element";
//   //   }

//   let smallest = Infinity;
//   let secondSmallest = Infinity;

//   let largest = -Infinity;
//   let secondLargest = -Infinity;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < smallest) {
//       secondSmallest = smallest;
//       smallest = arr[i];
//     } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
//       secondSmallest = arr[i];
//     }

//     if (arr[i] > largest) {
//       secondLargest = largest;
//       largest = arr[i];
//     } else if (arr[i] > secondLargest && arr[i] !== largest) {
//       secondLargest = arr[i];
//     }
//   }
//   return {
//     secondSmallest:
//       secondSmallest === Infinity
//         ? "all the elements are same "
//         : secondSmallest,
//     secondLargest:
//       secondLargest === -Infinity ? "all the elements are same" : secondLargest,
//   };
// }

// const array11 = [12, 3, 4, 5, 6, 7, 8];
// const { secondLarge, scondsmall } = findSecondLargestAndSmallest(array11);

// console.log(scondsmall, secondLarge);

function findSecondLargestAndSmallest(arr) {
  if (arr.length < 2) {
    return "Array must have at least two elements.";
  }

  let smallest = Infinity;
  let secondSmallest = Infinity;
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      secondSmallest = smallest;
      smallest = arr[i];
    } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
      secondSmallest = arr[i];
    }

    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== largest) {
      secondLargest = arr[i];
    }
  }

  return {
    secondSmallest:
      secondSmallest === Infinity
        ? "All elements are the same."
        : secondSmallest,
    secondLargest:
      secondLargest === -Infinity
        ? "All elements are the same."
        : secondLargest,
  };
}

// Example usage:
const array12 = [10, 5, 20, 8, 15];
const { secondSmallest, secondLargest } = findSecondLargestAndSmallest(array12);
console.log("Second smallest element:", secondSmallest); // Output: 8
console.log("Second largest element:", secondLargest); // Output: 15

function reverseString(str) {
  const charactersArray = str.split("");

  const reversedCharactersArray = charactersArray.reverse();

  const reversedString = reversedCharactersArray.join("");

  return reversedString;
}

const inputString = "Hello world!";
const reversedString = reverseString(inputString);
console.log("Reversed string:", reversedString);
