import React from 'react';
import { useState, useEffect } from 'react';

const HookUseEffect = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    useEffect(() => {
        console.log('useEffect updating document title');
        document.title = `You clicked ${count} times`
    },[count])
    return ( 
        <div>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Click {count}</button>
        </div>
     );
}
 
export default HookUseEffect;