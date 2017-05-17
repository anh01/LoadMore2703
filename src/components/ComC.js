import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import { connect } from 'react-redux';
import { incrNum, descNum, changeColor, changeLength, getLength } from '../redux/action';

const buttonStyle = {
    backgroundColor: 'white', 
    padding: 20, 
    borderRadius: 5,
    alignItems: 'center',
    margin: 10 
};

class ComC extends Component {
    
    getArrLength() {
        this.props.getLength();
    }

    render() {
        return (
            <View style={{ backgroundColor: 'lightgray', padding: 20, margin: 20 }}>
                <Text>Component C</Text>
                <TouchableOpacity 
                    onPress={() => this.props.incrNum()}
                    style={buttonStyle}
                >
                    <Text style={{ color: '#313183', fontWeight: 'bold' }}>ADD</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => this.props.changeColor()}
                    style={buttonStyle}
                >
                    <Text style={{ color: '#313183', fontWeight: 'bold' }}>CHANGE COLOR</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={this.getArrLength.bind(this)}
                    style={buttonStyle}
                >
                    <Text style={{ color: '#313183', fontWeight: 'bold' }}>GET LENGTH</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default connect(undefined, { incrNum, descNum, changeColor, changeLength, getLength })(ComC);

/*
    state =>
    store => la doi tuong quan ly state
    reducer => la 1 function => tinh toan cai state moi. 
    Dua tren 1 hanh dong, state cu
    action => object { type: "MUA_HANG", amount: 5000 }
*/

