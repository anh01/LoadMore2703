import React, { Component } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import signUpAPI from '../api/signUp';

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            rePassword: '',
            phone: '',
            address: ''
        };
    }

    onSuccess() {
        Alert.alert(
            'Notice',
            'Sign up successfully',
            [
                { text: 'OK', onPress: this.props.gotoSignIn() }
            ],
            { cancelable: false }
        );
    }

    onFail() {
        Alert.alert(
            'Notice',
            'Email has been used by other',
            [
                { text: 'OK', onPress: () => this.removeEmail.bind(this) }
            ],
            { cancelable: false }
        );
    }

    removeEmail() {
        this.setState({ email: '' });
    }

    onSignUp() {
        const { name, email, address, phone, password } = this.state;
        signUpAPI(email, password, address, name, phone)
        .then(res => console.log(res));
    }

    render() {
        const { inputStyle, bigButton, buttonText } = styles;
        return (
            <View>
                <TextInput 
                    autoCorrect={false}
                    style={inputStyle} 
                    placeholder="Enter your name" 
                    value={this.state.name}
                    onChangeText={text => this.setState({ name: text })}
                />
                <TextInput 
                    autoCorrect={false}
                    autoCapitalize="none"
                    style={inputStyle} 
                    placeholder="Enter your email" 
                    value={this.state.email}
                    onChangeText={text => this.setState({ email: text })}
                />
                <TextInput 
                    autoCorrect={false}
                    autoCapitalize="none"
                    style={inputStyle} 
                    placeholder="Enter your password" 
                    value={this.state.password}
                    secureTextEntry
                    onChangeText={text => this.setState({ password: text })}
                />
                <TextInput 
                    autoCorrect={false}
                    style={inputStyle} 
                    autoCapitalize="none"
                    placeholder="Re-enter your password" 
                    value={this.state.rePassword}
                    onChangeText={text => this.setState({ rePassword: text })}
                />
                <TextInput 
                    autoCorrect={false}
                    autoCapitalize="none"
                    style={inputStyle} 
                    autoCapitalize="none"
                    placeholder="Enter your address" 
                    value={this.state.address}
                    onChangeText={text => this.setState({ address: text })}
                />
                <TextInput 
                    autoCorrect={false}
                    style={inputStyle} 
                    autoCapitalize="none"
                    placeholder="Enter your phone number" 
                    value={this.state.phone}
                    onChangeText={text => this.setState({ phone: text })}
                />
                <TouchableOpacity style={bigButton} onPress={this.onSignUp.bind(this)}>
                    <Text style={buttonText}>SIGN UP NOW</Text>
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
