import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class PrivatePlace extends Component {
    render() {
        const { email, name, address, phone } = this.props.user;
        return (
            <View style={{ flex: 1, backgroundColor: 'lightblue' }}>
                <Text>Welcome {email}</Text>
                <Text>{name}</Text>
                <Text>{phone}</Text>
                <Text>{address}</Text>
            </View>
        );
    }
}
