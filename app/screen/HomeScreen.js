import React, { Component } from 'react';
import {View, Text} from 'react-native';
import styles from '../../styles';
import ButtonComponent from '../components/ButtonComponent';

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <View style={styles.appTitle}>
                    <Text style={styles.appTitleText}>Re Log</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <ButtonComponent
                        buttonText="Add Log"
                        onPress={() => this.props.navigation.navigate('AddLog')}>
                    </ButtonComponent>
                    <ButtonComponent
                        buttonText="View Log"
                        onPress={() => this.props.navigation.navigate('ViewLog')}>
                    </ButtonComponent>
                </View>
            </View>
        );
    }
}
