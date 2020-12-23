import React from 'react';
import { useState } from 'react';

const HookCounter = () => {

    const initialCount = 0;
    const [count, setCount] = useState(initialCount);

    const resetCount = () => {
        setCount(initialCount)
    }

    const incrementCount = () => {
        setCount(prevCount => prevCount + 1);
    }

    const decrementCount = () => {
        setCount(prevCount => prevCount - 1);
    }

    const increment5 = () => {
        setCount(prevCount => prevCount + 5);
    }

    return ( 
        <div>
            <h1>Lawrence Yoma</h1>
            <div>Count: {count}</div>
            <button onClick={resetCount}>Reset</button>
            <button onClick={incrementCount}>Increment</button>
            <button onClick={decrementCount}>Decrement</button>
            <button onClick={increment5}> Increase 5</button>
        </div>
     );
}
 
export default HookCounter;