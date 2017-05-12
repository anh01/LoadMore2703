import React, { Component } from 'react';
import { View, Text, ListView, StatusBar, RefreshControl } from 'react-native';

StatusBar.setHidden(true);

export default class App extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            listProducts: ds,
            refreshing: false,
            idMax: 0
        };
        this.arr = [];
    }

    componentDidMount() {
        fetch('http://localhost:3000/products/1')
        .then(res => res.json())
        .then(resJSON => {
            this.arr = [...resJSON, ...this.arr];
            this.setState({
                listProducts: this.state.listProducts.cloneWithRows(this.arr),
                idMax: resJSON[resJSON.length - 1].id
            });
        });
    }

    render() {
        return (
            <View style={{ backgroundColor: 'lightblue', flex: 1 }}>
                <ListView
                    dataSource={this.state.listProducts}
                    renderRow={product => (
                        <Text style={{ color: 'gray', fontSize: 40, margin: 30 }}>{product.name}</Text>
                    )}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={() => {
                                this.setState({ refreshing: true });
                                fetch(`http://localhost:3000/products/${this.state.idMax}`)
                                    .then(res => res.json())
                                    .then(resJSON => {
                                        this.arr = [...resJSON, ...this.arr];
                                        this.setState({
                                            refreshing: false,
                                            listProducts: this.state.listProducts.cloneWithRows(this.arr),
                                            idMax: resJSON[resJSON.length - 1].id
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
