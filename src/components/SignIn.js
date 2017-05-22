import React, { Component } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    render() {
        const { inputStyle, bigButton, buttonText } = styles;
        const { email, password } = this.state;
        return (
            <View>
                <TextInput
                    autoCorrect={false}
                    style={inputStyle}
                    placeholder="Enter your email"
                    value={email}
                    autoCapitalize="none"
                    onChangeText={text => this.setState({ email: text })}
                    underlineColorAndroid="transparent"
                />
                <TextInput
                    autoCorrect={false}
                    style={inputStyle}
                    autoCapitalize="none"
                    placeholder="Enter your password"
                    value={password}
                    onChangeText={text => this.setState({ password: text })}
                    secureTextEntry
                />
                <TouchableOpacity style={bigButton} >
                    <Text style={buttonText}>SIGN IN NOW</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputStyle: {
        height: 50,
        backgroundColor: '#fff',
        marginBottom: 10,
        borderRadius: 20,
        paddingLeft: 30
    },
    bigButton: {
        height: 50,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontFamily: 'Avenir',
        color: '#fff',
        fontWeight: '400'
    }
});
