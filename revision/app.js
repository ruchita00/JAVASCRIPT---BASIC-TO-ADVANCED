//find the second lagest number

function findLargestNumber(arr) {
  if (arr.length < 2) {
    return "arr length should be grether than2 ";
  }
  console.log("hellp");

  let large = -Infinity;
  let secondLarge = -Infinity;

  let small = Infinity;
  let secondSmall = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > large) {
      secondLarge = large;
      large = arr[i];
    } else if (arr[i] > secondLarge && arr[i] !== large) {
      secondLarge = arr[i];
      console.log(secondLarge);
    }

    if (arr[i] < small) {
      secondSmall = small;
      small = arr[i];
    } else if (arr[i] < secondSmall && arr[i] !== small) {
      secondSmall = arr[i];
    }
  }
  return {
    secondLarge: secondLarge === -Infinity ? "all the element" : secondLarge,
    secondSmall: secondSmall === Infinity ? "all the element" : secondSmall,
  };
}

const array = [1, 2, 3, 4, 5, 6, 7, 8];

const { secondLarge, secondSmall } = findLargestNumber(array);
