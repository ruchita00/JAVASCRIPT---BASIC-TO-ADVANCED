# 1. What is useCallback and useMemo hook?
  - both the hooks are used to optimize performance in react functional components by memoizing values and preventing unnecessary re-renders.

-  useCallback: 
   - the useCallback hook is used to memoize the callback in functional components 
   - it returns a memoized version of callback function that only changes if one of the dependencies has changed.
   - it is particularly used when passing callbacks to child components that rely on reference equality to prevent unnecessary re-renders.

   example:

   - import React, {useState,useCallback} from react;
   function ParentComponent(){

    const [count,setCount]=useState(0)

    const handleClick=useCallback(()=>{
        setCount(count+1)
    },[count])

    return(
        <div>
        <ChildComponent onClick={handleClick} />
    )
   }

- useMemo:

  - useMemo hook is used to memoize the result of a function computation. it caches the result of the function and returns that result whenver the dependenices have not changed
  - it is useful for optimizing expensive calculations or computations within a component ensuring that they are only re-executed whwen necessary.

  - example:
  import React, { useMemo } from 'react';

function ExpensiveComponent({ value }) {
  const expensiveResult = useMemo(() => {
    // Expensive computation here
    return value * 2;
  }, [value]);

  return <div>{expensiveResult}</div>;
}

# 2.what is pure component?
- pure component is similar to component but it skips re-renders for same props and state.

# 3.What is higher order component?
- A higher order component is design pattern in react that allows you to use component logic and share functionality between components.
- it is function that takes a component as input and returns a new component with enhanced capabilities.

     - Accepts a component: a hoc takes a component as an argument
     - return a new component: it returns a new component that wraps the original component
     - enhances functionality: The new component enhances the functionality of the original component by adding additional props state or behavior
     - Reusability: higher order component pormote reusability by encapsulating common functionality in a seperate function making it easier to apply that functionality to multiple components

# 4.What is localstorage and sesson storage?
-  localstorage and session storage are both web storage options provided by modern web browser to store data with the users browser 

  - lifespan:

    - localstorage data store in localstorage persists even after the browser is closed and is avaialble until explicitly cleard by user or the web application

   - session storage is data stored in session storage is only avaialble for the duration of the page session 
   - it cleared when the browser tab or window is closed

 - scope: 

   - localstorage : data stored in localstorage is shared across all tabs and windows within the same origin

   - sessionstorage:
      - data stored in session storage is scoped to current tab or window it is not shared with other tab or windows even if they belong to the same origin 
 - Usage:
    
    -both session storage and localstorage are provided simple key value pair storage mechanisms similar to js objects
    -they can store various type of data including string numbers arrays and objects but the data is alwayas stored as strings
    - you need t serialize and deserialize complex data types when storing and retreving them.

    - they provide methods as setItem(), getItem(), removeItem(), clear()
   
   - example:
   // Using localStorage
localStorage.setItem('username', 'John');
const username = localStorage.getItem('username');
console.log(username); // Output: 'John'

// Using sessionStorage
sessionStorage.setItem('theme', 'dark');
const theme = sessionStorage.getItem('theme');
console.log(theme); // Output: 'dark'


# 5. what is virtual dom?

- virtual dom:
    
    - virtual dom representation:
       - when you create a react component react builds a virtual representation of the dom elements that the component renders

    Effienet reconciliation:
      - whenver there's a changes in state or props of component react contructs new virtual dom representation
    
    diifing algorithm:
      - react then  compares new vritual dom with previous one using process called reconciliation or diffing.
      - it identifies the minimal number of changes needed to update actual dom
    
    batch updated:
      - react batches these changes together and updates the real dom only with the necessary modifications , rather than re-redering the entire page
      this approach significantly improves performace as direct manipulation of the real dom can be slow and 


# 6.why react is popular?

- virtual dom:
   - whenever we create react component react build the virtual dom repersntation of dom elements that the component renders
   - whenever the chanages happens in state or props of component react contruct new virtual dom 
   new vitrual dom compared with previous virtual dom and identifies the minimal changes to update the real dom this process is known as recolcilation process.
   - react batches these changes togther and update the real dom

- component based articture:
    - react component based architechture encourages building applications as a collection of reusable and composable component.
    - this approch promotes code reusability, modularity and maintainability, making it easier to build and scale complex application

- declarative syntax:
   - react uses a declarative syntax that makes it easier to understand and write ui component 

- unidirectional data flow:
   - react follws a unidirectional data flow where data flows a single diretion form parent to child compoents

- JSX:
    - jsx is syntax extension for js that allows developers to write htmllike code directly within there js files

- perfomance:
    - react application can handle large datasets and complex ui while maintaining fast rendering speed and smooth user experiences.

- rich ecosystem:
   - react has rich ecosystem of libraries tool and community support.


# 7. Difference between state and props?
-  state and props are two fundamental concepts in react for manaing and passing data between components, but they serve different purpose and have different characterstic 

- state:
   - it represent the components internal data or state.
   - it is mutable and can be updated using setstate method provided by react
   - state is local to component where it is defined and cannot be directly accessed or modified by other components
   - changes to state tiggers re renders of the component and its children updating the ui to reflect the new state

- props:
  - props are inputs in react component that are passed from parent to child components
  - props are immutable and cannot be modified within the component that receives them
  - they are used to pass data
  - used to render dynamic content


# 8 what is super contructor render function in raect js
- super : is the bridge that connects a child class component to its parent class constructor allowing child class to inherit all the properties from the parent 

- for instance consider a class Person that extends a class base. 
to ensure that our person component can use the methods from its based class we need to cll super() inside constructor function of the class person

class Person extends React.Compoent{
  constructor(props){
    super(props);
  }
}

- constuctor: 
  - the constructor is a method used to initilize an objects state in a class it automatically called during the creation of the object in a class
  - the concep of constructor is same in react the constructor in a react compoent is called before the component is mounted


  - when you implement the constructor for react component you need to call super(props method) before any other statement. 
  - if you do not call super(props) method this.props will be undefined in the constructor.

  contructor(props){
    super(props)
  }

- render: 
it represnt the jsx that represent the UI  of the component this function is called whenever the component needs to re-render due to changes in its state or props


class Person extends React.Component{
  constructor(){
    super()
  }
  render(){
    return(
      <div>hello</div>
          )
  }
}

 How to optimize react app

 - optimizing a react app involves serveral strategies aimed at imporving its performance user experience and code efficiency here are some common techniques

- code splitting:  
   - use react built in support for code splitting to spilt ur js bundle into smaller chunks that can be loaded asnchronously this can speed up the initial loading time of your app by only loading neccessary code for the current view.
   exmaple: webpack, rollup

- lazy loading:

   - employ lazy loading to delay the loading of compoennts or resources that are not immediately needed when the app loads.
   - this can further the reduce initial load time and improve percived performance

- bundle size optimization:

  - minify and compress you js css and other asses to renduce their size consideer using tools like webpack bundle anazlzer to indetify and eliminate unnecessary dependencies and optimise bundle size 


- memoization and memoizing selectors:

  use memoization techiniques( usememo,usecallback) to optimize rendering performance by preventing re-renders of components or re-computitions of expensive computations

  - Server side rendering: consider implementing server side rendering to pre-render the initial html on the server and send it to the client which can imporove performce and seo

  - optimize images and media:

      - compress and optimize images and other media files to reuce their size without sancrifing quality consider lazy loading images that are not immedialty viisble on the screen
  


what is server side rendering?
- react refers to the process of the rendering react compoenets ont he server side before sending html to clients broswer
client browsers meaning donwloading js bundle execute it and render the ui
however with ssr the server generates the html for give route and sends it to the client which can imporve performance and sea dn user experience in certain scenarious

- here how ssr works
- initial request: when user navigates to url in react application that supports ssr the server receives the request

- sever side rendering : this server executes the react components corresponding to the requested route and generates te html markup for entire page

sending html to client :
once the html markup is generated the server sends it as the response to the client request.

client side hydration: when the client receives the html from the server it also downloads the js bundles the js bundles includes same react comonent that were used for ssr

rehydration: the js bundle rehydrates the html received from the server meaning that it attaches event handlers and  setup the neceesary js behavior this process allows react components to become interactive on the client side

client side render: from this point on react applicaton behvaes like traditional client side rendere application handler user interaction and updates to the ui entierel on the client side

ssr offers serveral benifits:
improve performce
better sco 
enhanced user experience


what is react router?
react router is popluar library for handling routing in react applications it allows developers to manage navigation and url routing in react application by mapping url to specific components enabling the creation of single page application with multiple view pages

what is react fragment

a fragment is a lightweight wrapper that allows yout o group multiple elements together without adding extra nodes to the dom.


