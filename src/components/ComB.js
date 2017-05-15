import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ComC from './ComC';

export default class ComB extends Component {
    render() {
        return (
            <View style={{ backgroundColor: '#C4B7D7', padding: 20, margin: 20 }}>
                <Text>Component B</Text>
                <ComC incrNum={this.props.incrNum} />
            </View>
        );
    }
}
