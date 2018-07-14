import React, { Component, Fragment } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Input, TextLink, Button, Loading } from './common';

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      passwordConfirmation: '',
      error: '',
      loading: false,
    };
  }

  render() {
    const {
      email, password, passwordConfirmation, error, loading,
    } = this.state;

    return (
      <Fragment>
        <View style={styles.form}>
          <View style={styles.section}>
            <Input
              placeholder="user@email.com"
              label="Email"
              value={email}
              onChangeText={email => this.setState({ email })}
            />
          </View>

          <View style={styles.section}>
            <Input
              secureTextEntry
              placeholder="password"
              label="Password"
              value={password}
              onChangeText={password => this.setState({ password })}
            />
          </View>

          <View style={styles.section}>
            <Input
              secureTextEntry
              placeholder="confirm password"
              label="Confirm Password"
              value={passwordConfirmation}
              onChangeText={passwordConfirmation => this.setState({ passwordConfirmation })}
            />
          </View>

          <Text style={styles.errorText}>
            {error}
          </Text>

          {!loading ?
            <Button>
              Register
            </Button>
            :
            <Loading size="large" />}

        </View>

        <TextLink onPress={this.props.authSwitch}>
          Already have an account? Log in!
        </TextLink>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  form: {
    width: '100%',
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  section: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    backgroundColor: '#fff',
    borderColor: '#ddd',
  },
  errorText: {
    alignSelf: 'center',
    fontSize: 18,
    color: 'red',
  },
});

export { Registration };
