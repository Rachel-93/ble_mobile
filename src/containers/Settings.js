import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export class Settings extends Component {
    render(){
        return (
            <View>
                <Text> This is the Settings screen</Text>
                <Button 
                    title = "Go to Details"
                    onPress = {() => this.props.navigation.navigate('Details')} />
            </View>
        )
    }
};

export default Settings;