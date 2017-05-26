import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import Authentication from './components/Authentication';
import getToken from './api/getToken';

StatusBar.setHidden(true);

export default class App extends Component {
    render() {
        return <Authentication />;
    }
}

// saveToken('XIN CHAO CAC BAN');
getToken()
.then(token => console.log(token));
