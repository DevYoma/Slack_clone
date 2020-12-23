import React, { useReducer } from 'react';

const initialState = {
    firstCounter: 0 ,
    secondCounter: 10
};
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return {
                ...state,
                firstCounter: state.firstCounter + action.value
            };
        case 'decrement':
            return {
                ...state,
                firstCounter: state.firstCounter - action.value
            };
        case 'increment2':
            return {
                ...state,
                secondCounter: state.secondCounter + action.value
            }
        case 'decrement2':
            return {
                ...state,
                secondCounter: state.secondCounter - action.value
            }
        case 'reset':
            // initialState.firstCounter not displaying ZERO
            return initialState
        default:
            return state;
    }
}

const CounterReducer2 = () => {
    const [count, dispatch] = useReducer(reducer, initialState);
    return ( 
        <div>
            <h1>State and Action as Objects</h1>
            <h2>Count = {count.firstCounter}</h2>
            <h2>SecondCount = {count.secondCounter}</h2>
            <button onClick={() => dispatch({type: 'increment', value: 1})}>
                Increment
            </button>
            <button onClick={() => dispatch({type: 'decrement', value: 1})}>
                Decrement
            </button>
            <button onClick={() => dispatch({type: 'increment', value: 5})}>
                Increment 5
            </button>
            <button onClick={() => dispatch({type: 'decrement', value: 5})}>
                Decrement 5
            </button>
            <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
            
            <div>
                <button onClick={() => dispatch({type: 'increment2', value: 1})}>
                    Increase Counter 2
                </button>
                <button onClick={() => dispatch({type: 'decrement2', value: 1})}>
                    Decrease Counter 2
                </button>
            </div>
        </div>
     );
}
 
export default CounterReducer2;