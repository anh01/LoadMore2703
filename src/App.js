import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import ComA from './components/ComA';
import store from './redux/store';

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
