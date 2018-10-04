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

import SingleAddLogScreen from './app/screen/addLog/SingleAddLogScreen';
import StartEndAddLogScreen from './app/screen/addLog/StartEndAddLogScreen';
import NumberAddLogScreen from './app/screen/addLog/NumberAddLogScreen';

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
        SingleAddLog: SingleAddLogScreen,
        StratEndAddLog: StartEndAddLogScreen,
        NumberAddLog: NumberAddLogScreen
    },
    {
        initialRouteName: 'Home',
    }
);
