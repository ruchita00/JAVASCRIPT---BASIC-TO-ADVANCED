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

  - useMemo hook is used to memoize the result of a function computation. it caches the result of the function and returns that result whenver the deoendenices have not changed
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


























