import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ComA from './components/ComA';

StatusBar.setHidden(true);

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <View style={{ flex: 1 }}>
                    <ComA />
                </View>
            </Provider>
        );
    }
}

const defaultState = { num: 0 };

function reducer(state = defaultState, action) {
    if (action.type === 'INCR') return { num: state.num + 1 };
    if (action.type === 'DECS') return { num: state.num - 1 };
    return state;
}

const store = createStore(reducer);

console.log(store.getState());

store.dispatch({ type: 'INCR' });
console.log(store.getState());

store.dispatch({ type: 'DECS' });
console.log(store.getState());
