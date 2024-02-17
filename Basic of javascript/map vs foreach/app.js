//question 1 map vs foreach

//this both are function which can loop though the arr

//for each doesnt return anything like map function does

const arr = [2, 5, 4, 3, 4];

const mapResult = arr.map((ar) => {
  return ar + 2;
});

const forEachResult = arr.forEach((ar) => {
  //   arr[i] = ar + 2;
});

console.log(mapResult, forEachResult);

//map return the new array
// for does not return anything
//foreach modify the original arr
//you can chain methods with map
//forEachResult do not chaining

//2. null vs undefined

/**
 * null represents the intentional absesnce of any value
 * used to indicate that a vairable object property or function return no values
 * undefined means the variables is declared but it is not initialize yet
 * if we dont  delcare value and trting to access it -- notdefined
 */

console.log(typeof null); //object
console.log(typeof undefined); //undefined

console.log(null == undefined); //true -compare equality without matching their type
console.log(null === undefined); //false - compare equality with matching their type

/**
 * 3. explain event delegation?
 * event delegation is javacript programming pattern where you attach a single event lister
 * a parent element to manage events for all of its child elements. instead
 * of attaching indidividual event listners to each child component.
 *
 * attach event lister to parent component:
 * you attached an event listner to a parent elements that contains all the
 * child element you re interested in
 *
 * use of event target:
 * when an event occurs the event babbles up through the dom hierarchy
 * you use event.target properly to identify the specific child element that triggered the event
 *
 */

document.querySelector("#products").addEventListener("click", (e) => {
  console.log(e);

  if (e.target.tagName === "LI") {
    window.location.href += "#" + event.target.id;
  }
});
