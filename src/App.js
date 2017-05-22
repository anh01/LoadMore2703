import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import Authentication from './components/Authentication';

StatusBar.setHidden(true);

export default class App extends Component {
    render() {
        return <Authentication />;
    }
}
