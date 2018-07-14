import React, { Component } from 'react';
import { YellowBox } from 'react-native';
import { Provider } from 'react-redux';
import { Auth } from './containers/Auth';
import { RootStack } from './router';
import configureStore from './store/configureStore';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader', 'Remote debugger']);

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      jwt: true,
    };
  }

  render() {
    const { store } = configureStore();
    if (!this.state.jwt) {
      return (
        <Auth />
      );
    } else if (this.state.jwt) {
      return (
        <Provider store={store}>
          <RootStack />
        </Provider>
      );
    }
  }
}
