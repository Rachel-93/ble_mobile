import React, { Component } from 'react';
import{
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Loading } from './components/common/';
import Auth from './containers/Auth';
import { RootStack } from './router';

// Redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './reducers';

// Redux Saga
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga/rootSaga';

const sagaMiddleware = createSagaMiddleware();
let store = createStore(allReducers, applyMiddleware(sagaMiddleware));

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      //jwt: ''
      jwt: true
    }
  }

  render() {
    if (!this.state.jwt){
      return (
        <Auth />
      );
    } else if (this.state.jwt) {
      return (
        <Provider store={store}>
          <RootStack />
        </Provider>
      )
    }
  }
}

sagaMiddleware.run(rootSaga);