import React, { Component } from 'react';
import {
    Alert,
    AppRegistry,
    Button,
    Text,
    TextInput,
    View,
    StyleSheet,
    TouchableHighlight
} from 'react-native';

import { createStackNavigator } from 'react-navigation';

import styles from './styles';

import HomeScreen from './app/screen/HomeScreen';
import AddLogScreen from './app/screen/AddLogScreen';
import ViewLogScreen from './app/screen/ViewLogScreen';

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    AddLog: AddLogScreen,
    ViewLog: ViewLogScreen,
  },
  {
    initialRouteName: 'Home',
  }
);
