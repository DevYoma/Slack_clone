import React, { useState, useEffect } from 'react';

const HookMouse = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const logMousePosition = (e) => {
        console.log('Mouse event');
        setX(e.clientX);
        setY(e.clientY);
    }

    useEffect(() => {
        console.log('useEfect called');
        window.addEventListener('mousemove', logMousePosition);

        //cleanUp function
        return () => {
            console.log('Component unmounting code');
            window.removeEventListener('mousemove', logMousePosition); 
        }
    }, [])

    return ( 
        <div>
            Coordinates X - {x} Y - {y}
        </div>
     );
}
 
export default HookMouse;