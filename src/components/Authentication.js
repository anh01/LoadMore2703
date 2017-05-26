import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity, StyleSheet
} from 'react-native';

import SignIn from './SignIn';
import SignUp from './SignUp';
import PrivatePlace from './PrivatePlace';
import getToken from '../api/getToken';
import checkUserState from '../api/checkUserState';

export default class Authentication extends Component {
    constructor(props) {
        super(props);
        this.state = { isSignIn: true, user: null };
    }

    componentDidMount() {
        getToken()
        .then(token => checkUserState(token))
        .then(res => {
            if (res === 'THAT_BAI') return console.log('CHUA CO TOKEN');
            this.gotoPrivatePlace('KHOA PHAM');
        })
        .catch(err => console.log(`LOI CHECK: ${err}`));
    }

    gotoPrivatePlace(user) {
        this.setState({ user });
    }

    gotoSignIn() {
        this.setState({ isSignIn: true });
    }

    signIn() {
        this.setState({ isSignIn: true });
    }

    signUp() {
        this.setState({ isSignIn: false });
    }
    render() {
        const {
            container, controlStyle,
            signInStyle, signUpStyle,
            activeStyle, inactiveStyle
        } = styles;

        const { isSignIn, user } = this.state;
        const mainJSX = isSignIn ? 
            <SignIn gotoPrivatePlace={this.gotoPrivatePlace.bind(this)} /> 
            : <SignUp gotoSignIn={this.gotoSignIn.bind(this)} />;
        return (
            user ? <PrivatePlace user={user} /> :
            <View style={container}>
                {mainJSX}
                <View style={controlStyle}>
                    <TouchableOpacity style={signInStyle} onPress={this.signIn.bind(this)}>
                        <Text style={isSignIn ? activeStyle : inactiveStyle}>SIGN IN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={signUpStyle} onPress={this.signUp.bind(this)}>
                        <Text style={!isSignIn ? activeStyle : inactiveStyle}>SIGN UP</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3EBA77',
        padding: 20,
        justifyContent: 'space-between'
    },
    row1: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
    titleStyle: { color: '#FFF', fontFamily: 'Avenir', fontSize: 30 },
    iconStyle: { width: 30, height: 30 },
    controlStyle: {
        flexDirection: 'row',
        alignSelf: 'stretch'
    },
    inactiveStyle: {
        color: '#D7D7D7'
    },
    activeStyle: {
        color: '#3EBA77'
    },
    signInStyle: {
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingVertical: 15,
        flex: 1,
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20,
        marginRight: 1
    },
    signUpStyle: {
        backgroundColor: '#fff',
        paddingVertical: 15,
        alignItems: 'center',
        flex: 1,
        marginLeft: 1,
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20
    },
    
});
