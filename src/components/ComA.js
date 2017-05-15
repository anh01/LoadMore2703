import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import ComB from './ComB';

class ComA extends Component {
    render() {
        return (
            <View style={{ backgroundColor: '#D87B69', padding: 20 }}>
                <Text>Component A</Text>
                <Text style={{ fontSize: 20, color: '#fff' }}>
                    Number: {this.props.number}
                </Text>
                <ComB />
            </View>
        );
    }
}

export default connect(state => ({ number: state.num }))(ComA);
