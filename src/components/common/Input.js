/* import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

class Input extends Component {
    render() {
        const { label, value, onChangeText, placeholder, secureTextEntry, multiline, numberOfLines } = this.props;
        return (
            <View style = { styles.container }>
                <Text style = { styles.label }>{label}</Text>
                <TextInput
                    secureTextEntry = { secureTextEntry }
                    placeholder = { placeholder }
                    value = { value }
                    onChangeText = { onChangeText }
                    autoCorrect = { false }
                    multiline = { multiline }
                    numberOfLines = { numberOfLines }
                    style = { styles.input }
                />
            </View>
        );
    }
}

const styles = StyleSheet. create({
    container: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
      },
      label: {
        fontSize: 16,
        paddingLeft: 20,
        flex: 1
      },
      input: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 3
      }
})

export default Input; */

import React from 'react';
import { View, TextInput, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry, multiline, numberOfLines }) => {
  const {inputStyle, labelStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        autoCorrect={false}
        multiline={multiline}
        numberOfLines={numberOfLines}
        style={inputStyle}
      />
    </View>
  );
};

const styles = {
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  labelStyle: {
    fontSize: 16,
    paddingLeft: 20,
    flex: 1
  },
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 3
  }
};

export { Input };