# 1.What is Event loop?
- When the javascript program is executed the event is move from task queue to callstack this process is known as event loop 

# 2.What is Hoisting in javascript?
- Hoisting is phenomena in javascript which we can access the variables and function before initialization it is called hositing.

# 3.In event loop between settimout and promise if both are resolved at the same time which one take higer preciedence?
- In javascript setTimeout and promises are handled asynchronously within the event loop but they have different prioprities
- When the setTimout callback and resolved promise are waiting in the event queue the resolved promise will be executed first.
- This is because promises have a higher priority in the event loop than timers like setTimout.

- Promises: 
  - when a promises resolve then() callbacks a queued in the microtask queue. microtask have higher priority than tasks like setTimout in the event loop.
  - this means that all the microtasks will be executed before the next task is picked form task queue.

  - SetTimeout: 
    - callbacks registed with setTimout are queue inthe task queue .
    - when the call stack is empty and there is no pending microtasks, the event loop picks the next task from the task queue and executes it.

# 4.What are the ES6 Features?
- let and const 
- spread operator 
- arrow function 
- promise

# 5.purpose of array.resverse()
- array.reverse() is method in js is used to revserse the order of elements in ana array.
- it mutates the original array by reversing the order of its element
- and return the reference to the reversed array

const array = [1, 2, 3, 4, 5];
array.reverse(); // Reverses the array in place
console.log(array); // Output: [5, 4, 3, 2, 1]

# 6.what is shaow copy and deep copy
- shadow copy:
 - created a new memory but it only copies the reference to original elements of the data 
- in case of array of object for example 
 a shallow copy will create a new array but the elements (objects) in the new array will be still point to the same objects in memory as the original array.

 -Deep copy:
   - it create a completely new data structure with its own set of elements and recusrively copies all nested elemenets within the original data.
   - in case of array of object a deep copy will be create a new array with new objects which are seperate copies of the objects in original array

# 7.what are closures?
- closure is fundamental concept of javascript function retain the access to variables from their lexical scope even after the outer function has retuned

function outer(){
    const outvarible="i am outer function "

function inner(){
    console.log(outvariale) 
}
return inner(); 

}

const innerfunc=outer()
inner() 
output : i am outer function






















