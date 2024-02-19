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

# 8.What is polyfill?
- Polyfill is piece of code that provides functionality of newr browser features to old browser features that do not support those features natively 
   - New Features:
      - as web standards evolve new features are introduced to js, html,css.
      - these features often enhance the capabilities of web application and making them more powerful and efficient.
  
    - brower Support:
       -however older broswer may not support these new featurs leading to compatibility issues.
       - users of these older browser would miss out on the benefits of these new features

     - Polyfill to rescue:
       - A polyfill is essentially a script that detects whether a certain browser features is supported.
       - if the features is not supported the polyfill provides its own implementation of that featur, enabling the functionality in older browsers.

    - Usages:
      - developers includes polyfills in their web application to ensure that the application works consistently across different browsers regardless of their level of support for new features.
      - example: Array.prototype.map()

      
    polyfills are particularly useful during transitional periods when developers are adopting new web standards but still need to support older browser 


   - They help bridge the gap between old and new technologies ensuring a more consistent user experience across different browsers

# 9.Write a polyfill for map?
- Array.prototype.myMap=function(cb){
     let temp=[]
     for(let i=0;i<this.length;i++){
        temp.push(cb(this[i],i,this))
     }
     return temp
   }

# 10.Write a polyfill for filter?
- Array.protoType.myFilter=function(cb){
    let temp=[]
    for(let i=0;i<this.length;i++){
        if(cb(this[i],i,this)){
            temp.push(this[i])
        }
    }
    return temp
}

# 11.Write a polyfill for reduce?
- Array.prototype.myReduce=function(initialValue,cb){
    var accumulator=initialValue;

    for(let i=0;i<this.length;i++){
      accumulator=accumulator?cb(accumulator, this[i],i,this):this[i]
    }
    return accumulator
}

#  12.what is the difference between promises and callback?
- Promises and callbacks are both mechanisms used in javscript for handling asynchronous operations,but they have some key differences:

   - Callback: 
       - Callbacks are functions passed as arguments to another function, typically to be executed once an asynchronous operation is completed.
       - callbacks were the traditional way of handling asychronous operations in javascript before teh introduction of promises.
       Cllbacks can lead to callback hell or pymid of doom when multiple asynchronous operations are nested within each other, making the code harder to read and maintain.

       - example:
          
          function fetchData(callback){
            setTimeout(()=>{
                const data= "some data"
                callback(data) //call the callback function with the result
            },1000)
          }

          fetchData(data=>{
            console.log(data)
          })
       
    - Promise:
       - Promises are the object representing the eventual completion or failture of an asunchronous operation.
       - promises were introduce in es6 to provide a cleaner and more structured way of handling asychronous code compared to callbacks.
       - Promises have built in methods like .then() and .catch() for handling and resloed value or rejection reason of the promise respectively
       - promises can be chained together allowing for more readable and sequential asynchronous code.

       - example
        

        function fetchData(){
            return new Promise((resolve,reject)=>{
                setTimout(()=>{
              const data='some data'
              resolve(data)
                },1000)
            })
        }
        
        fetchData.then((data)=>console.log(data)).catch(erro=>console.log(error))


  - In summary while both callbacks and promises are used for handling asynchronous opeations in javascript promises offers a more structure and readable approach, avoiding the callback hell problem and providing built in error handling mechanisms.


# 13explain the differnce between arrow function and callback function?

- arrow function have a more concies syntax as compare to regular functions
- arrtotype  functions do not have their own this argemnt super or new.target bindings which means they inherit these form surronding lexical context.
- arrow functions do not have proptype property

- in arrow function the value of this is lexically scoped meaning it is determined by surrounding code when arrow fuction is defined
- in regular function they value of this is determined by how the fucntion is called which can lead to unexpected behavior especially in nested functions or when dealing with event handler

- arrow function do not have their own argments object if you need to access argumnets you would used the arguments object of the enclosing non arrow fucntion
- regular function have their own arguments object which contains all arguments passed to the function

- arrow function are often used for short concies function expressions especially when defining callback functions or when wrting functional style code
- regular function are more versatile and can be used in wider range of scenarios including as object methods contructors or when you need explicit control over the value of this

// Regular function
function regularFunction(x, y) {
    return x + y;
}

// Arrow function
const arrowFunction = (x, y) => x + y;



# 14. explain event delegation?
  event delegation is javacript programming pattern where you attach a
   single event lister
  a parent element to manage events for all of its child elements.
   instead
  of attaching individual event listners to each child component.
 
  attach event lister to parent component:
  you attached an event listner to a parent elements that contains
   all the
  child element you re interested in
 
  use of event target:
  when an event occurs the event babbles up through the dom hierarchy
  you use event.target properly to identify the specific child
  element that triggered the event

 - event bubbing:
   - when an event occcurs on a descendant element such as click event on a button inside a div element the event bubbles up through the DOM tree this means that event occurs on the target element
    it also triggers the same event on each ancestor element all the way up to the root of the document
    






















































































