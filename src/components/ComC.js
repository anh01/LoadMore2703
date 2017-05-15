import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';


export default class ComC extends Component {
    render() {
        return (
            <View style={{ backgroundColor: 'lightgray', padding: 20, margin: 20 }}>
                <Text>Component C</Text>
                <TouchableOpacity 
                    onPress={this.props.incrNum}
                    style={{ 
                        backgroundColor: 'white', 
                        padding: 20, 
                        borderRadius: 5,
                        alignItems: 'center' 
                    }}
                >
                    <Text style={{ color: '#313183', fontWeight: 'bold' }}>ADD</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

/*
    state =>
    store => la doi tuong quan ly state
    reducer => la 1 function => tinh toan cai state moi. 
    Dua tren 1 hanh dong, state cu
    action => object { type: "MUA_HANG", amount: 5000 }
*/

