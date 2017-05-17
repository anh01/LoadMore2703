import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';

class ComC extends Component {
    render() {
        return (
            <View style={{ backgroundColor: 'lightgray', padding: 20, margin: 20 }}>
                <Text>Component C</Text>
                <TouchableOpacity 
                    onPress={() => {
                        const { dispatch } = this.props;
                        dispatch({ type: 'INCR' });
                    }}
                    style={{ 
                        backgroundColor: 'white', 
                        padding: 20, 
                        borderRadius: 5,
                        alignItems: 'center' 
                    }}
                >
                    <Text style={{ color: '#313183', fontWeight: 'bold' }}>ADD</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => {
                        const { dispatch } = this.props;
                        dispatch({ type: 'CHANGE_COLOR' });
                    }}
                    style={{ 
                        backgroundColor: 'white', 
                        padding: 20, 
                        borderRadius: 5,
                        alignItems: 'center' 
                    }}
                >
                    <Text style={{ color: '#313183', fontWeight: 'bold' }}>CHANGE COLOR</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default connect()(ComC);

/*
    state =>
    store => la doi tuong quan ly state
    reducer => la 1 function => tinh toan cai state moi. 
    Dua tren 1 hanh dong, state cu
    action => object { type: "MUA_HANG", amount: 5000 }
*/

