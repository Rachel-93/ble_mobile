import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { List, ListItem } from 'react-native-elements';

export default class HomeComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            forecast: [],
            condition: [],
            location: []
        }
    }

    componentWillMount() {
        this.props.onFetchWeather();
    }

    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('otherParams', null)
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.section}>
                    <Text
                        adjustsFontSizeToFit={true}
                        numberOfLines={1}
                        style={styles.headingDate}>
                        {this.state.condition.date}
                    </Text>
                </View>
                <View style={styles.section}>
                    <Text
                        adjustsFontSizeToFit={true}
                        numberOfLines={1}
                        style={styles.headingCelcius}>
                        {this.state.condition.temp}
                    </Text>
                </View>
                <View style={styles.section}>
                    <Text
                        adjustsFontSizeToFit={true}
                        numberOfLines={1}
                        style={styles.headingWeather}>
                        {this.state.condition.text}
                    </Text>
                </View>
                <List containerStyle={styles.listContainer}>
                    <FlatList
                        data={this.state.forecast}
                        keyExtractor={(x, i) => i}
                        renderItem={({ item }) =>
                            <ListItem
                                title={
                                    <Text style={styles.txtDate}>
                                        {item.date}
                                    </Text>
                                }
                                subtitle={
                                    <View style={styles.subtitleView}>
                                        <Text style={styles.txtCelcius}>
                                            {item.low}-{item.high}
                                        </Text>
                                        <Text style={styles.txtWeather}>
                                            {item.text}
                                        </Text>
                                    </View>
                                }
                                rightIcon={{ style: { color: 'red' } }}
                            />}
                    />
                </List>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 20
    },
    item: {
        flex: 1,
        alignSelf: 'stretch',
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    section: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headingDate: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
    },
    headingCelcius: {
        paddingTop: 10,
        textAlign: 'center',
        fontSize: 40
    },
    headingWeather: {
        textAlign: 'center',
        fontSize: 20,
        color: '#7e7e7e'
    },
    listContainer: {
        backgroundColor: 'transparent',
        borderTopColor: 'transparent'
    },
    subtitleView: {
        paddingTop: 5,
        paddingBottom: 10
    },
    txtDate: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    txtCelcius: {
        fontSize: 11
    },
    txtWeather: {
        fontSize: 11,
        color: '#7e7e7e'
    }
})