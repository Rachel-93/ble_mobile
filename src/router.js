import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { Home } from './containers/HomeContainer';
import { Settings } from './containers/Settings';
import { Details } from './containers/Details';
import Stats from './containers/Stats';

export const HomeStack = createStackNavigator(
  {
    Home: { screen: Home },
    Details: { screen: Details },
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: 'red',
      },
      headerTintColor: '#fff',
    },
  },
);

export const StatsStack = createStackNavigator(
  {
    Stats: { screen: Stats },
    Details: { screen: Details },
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: 'red',
      },
      headerTintColor: '#fff',
    },
  },
);


export const RootStack = createBottomTabNavigator(
  {
    Home: HomeStack,
    Settings,
    Stats: StatsStack,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Stats') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        }

        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  },
);
