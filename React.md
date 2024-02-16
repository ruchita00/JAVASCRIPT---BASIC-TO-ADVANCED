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



