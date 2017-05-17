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

const defaultState = { num: 0, isGreen: false };

function reducer(state = defaultState, action) {
    if (action.type === 'INCR') return { num: state.num + 1, isGreen: state.isGreen };
    if (action.type === 'DECS') return { num: state.num - 1, isGreen: state.isGreen };
    if (action.type === 'CHANGE_COLOR') return { num: state.num, isGreen: !state.isGreen };
    return state;
}

const store = createStore(reducer);
