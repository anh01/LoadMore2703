import { createStore, combineReducers } from 'redux';

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

const reducer = combineReducers({ num: numReducer, isGreen: isGreenReducer });

// function reducer(state = defaultState, action) {
//     if (action.type === 'INCR') return { ...state, num: state.num + 1 };
//     if (action.type === 'DECS') return { ...state, num: state.num - 1 };
//     if (action.type === 'CHANGE_COLOR') return { ...state, isGreen: !state.isGreen };
//     return state;
// }

const store = createStore(reducer);

export default store;
