// INITIAL DATA BELOW

export const initialState = {
    user: null,
}

// ACTION TYPES(because we dispatch actions through reducers, clean🤔);
export const actionTypes = {
    SET_USER: "SET_USER"
}

// state is what the data layer looks like
// action is what we're trying to do to the data layer, are we setting a user, changing theme, or chasing rats...
const reducer = (state, action) => {
    console.log(action);

    // now listen to the changes in the data layer using the action.type property as argument in a switch statment
    switch(action.type){
        case actionTypes.SET_USER:
            return {
                ...state, 
                // payload USER from the action dispatched in the SignIn method
                user: action.user
            }
        default: 
            return state;
    };

}

export default reducer;