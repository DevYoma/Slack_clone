import React, { createContext, useContext, useReducer } from 'react';

// context Creation
export const StateContext = createContext();

// this wraps the whole app component 
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// getting data from the context code
// export const useContextValue = () => useContext(contextName);
export const useStateValue = () => useContext(StateContext);
// this looks like CUSTOM HOOKS...

