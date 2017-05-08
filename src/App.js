import React, { Component } from 'react';
import { View, Text, ListView, StatusBar } from 'react-native';

StatusBar.setHidden(true);

export default class App extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            listColor: ds
        };
    }

    componentDidMount() {
        fetch('http://localhost:3000/products/1')
        .then(res => res.json())
        .then(resJSON => this.setState({ 
            listColor: this.state.listColor.cloneWithRows(resJSON) 
        }))
    }

    render() {
        return (
            <View style={{ backgroundColor: 'lightblue', flex: 1 }}>
                <ListView 
                    dataSource={this.state.listColor}
                    renderRow={color => (
                        <Text style={{ color: 'gray', fontSize: 40, margin: 30 }}>{color}</Text>
                    )}
                />
            </View>
        );
    }
}
