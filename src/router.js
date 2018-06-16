import React, { Component } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StackNavigator, createBottomTabNavigator } from 'react-navigation';
import Home from './containers/HomeContainer';
import Settings from './containers/Settings';
import Details from './containers/Details';

export const HomeStack = StackNavigator({
  Home: { screen: Home },
  Details: { screen: Details }
},
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: 'red'
      },
      headerTintColor: '#fff'
    }
  });

export const RootStack = createBottomTabNavigator({
  Home: HomeStack,
  Settings: Settings
},
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Settings') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        }

        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray'
    }
  });