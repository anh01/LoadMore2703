import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// const defaultState = { num: 0, isGreen: false };

function numReducer(state = 0, action) {
    if (action.type === 'INCR') return state + 1;
    if (action.type === 'DECS') return state - 1;
    return state;
}

function isGreenReducer(state = false, action) {
    if (action.type === 'CHANGE_COLOR') return !state;
    return state;
}

function arrLengthReducer(state = 0, action) {
    if (action.type === 'CHANGE_LENGTH') return action.length;
    return state;
}

const reducer = combineReducers({ 
    num: numReducer, 
    isGreen: isGreenReducer,
    length: arrLengthReducer 
});

// function reducer(state = defaultState, action) {
//     if (action.type === 'INCR') return { ...state, num: state.num + 1 };
//     if (action.type === 'DECS') return { ...state, num: state.num - 1 };
//     if (action.type === 'CHANGE_COLOR') return { ...state, isGreen: !state.isGreen };
//     return state;
// }

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
