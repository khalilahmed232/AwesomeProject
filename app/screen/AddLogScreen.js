import React, { Component } from 'react';
import {View, Text} from 'react-native';
import styles from '../../styles';
import AddLogButtonComponent from '../components/AddLogButtonComponent';
import ScreenHeader from '../components/ScreenHeader';

export default class AddLogScreen extends Component {
    render() {
        return (

            <View style={{flex: 1}}>
                <ScreenHeader screenTitle="Add Log"></ScreenHeader>
                <View style={[styles.buttonContainer, styles.addLogButtonContainer]}>
                    <AddLogButtonComponent
                        buttonText="Single"
                        onPress={() => this.props.navigation.navigate('SingleAddLog')}
                    >
                    </AddLogButtonComponent>
                    <AddLogButtonComponent
                        buttonText="Start and End"
                        onPress={() => this.props.navigation.navigate('StratEndAddLog')}
                        >
                    </AddLogButtonComponent>
                    <AddLogButtonComponent
                        buttonText="Number"
                        onPress={() => this.props.navigation.navigate('NumberAddLog')}
                        >
                    </AddLogButtonComponent>
                </View>
            </View>
        );
    }
}
