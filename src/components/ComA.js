import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import ComB from './ComB';

class ComA extends Component {
    render() {
        const color = this.props.isGreen ? 'green' : 'white';
        return (
            <View style={{ backgroundColor: '#D87B69', padding: 20 }}>
                <Text>Component A</Text>
                <Text style={{ fontSize: 20, color }}>
                    Number: {this.props.number}
                </Text>
                <ComB />
            </View>
        );
    }
}

const mapStateToProps = state => ({ 
    number: state.num,
    isGreen: state.isGreen 
});

export default connect(mapStateToProps)(ComA);
