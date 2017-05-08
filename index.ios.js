import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './src/App';

export default class LoadMore extends Component {
  render() {
    return <App />;
  }
}

AppRegistry.registerComponent('LoadMore', () => LoadMore);
