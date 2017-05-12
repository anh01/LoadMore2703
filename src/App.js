import React, { Component } from 'react';
import { View, Text, ListView, StatusBar, RefreshControl } from 'react-native';

StatusBar.setHidden(true);

export default class App extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            listColor: ds,
            refreshing: false,
            page: 1
        };
        this.arr = [];
    }

    componentDidMount() {
        fetch('http://localhost:3000/products/1')
        .then(res => res.json())
        .then(resJSON => {
            this.arr = [...resJSON, ...this.arr];
            this.setState({
                listColor: this.state.listColor.cloneWithRows(this.arr)
            });
        });
    }

    render() {
        return (
            <View style={{ backgroundColor: 'lightblue', flex: 1 }}>
                <ListView
                    dataSource={this.state.listColor}
                    renderRow={color => (
                        <Text style={{ color: 'gray', fontSize: 40, margin: 30 }}>{color}</Text>
                    )}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={() => {
                                this.setState({ refreshing: true });
                                const newPage = this.state.page + 1;
                                fetch(`http://localhost:3000/products/${newPage}`)
                                    .then(res => res.json())
                                    .then(resJSON => {
                                        this.arr = [...resJSON, ...this.arr];
                                        this.setState({
                                            refreshing: false,
                                            listColor: this.state.listColor.cloneWithRows(this.arr),
                                            page: newPage
                                        });
                                    });
                            }}
                        />
                    }
                />
            </View>
        );
    }
}
