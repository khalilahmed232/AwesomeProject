import React, { Component } from 'react';
import {View, Text} from 'react-native';
import styles from '../../styles';
import AddLogButtonComponent from '../buttons/AddLogButtonComponent';

export default class AddLogScreen extends Component {
    render() {
        return (

            <View style={{flex: 1}}>
                <View style={styles.screenTitle}>
                    <Text style={styles.screenTitleText}>Add Log</Text>
                </View>
                <View style={[styles.buttonContainer, styles.addLogButtonContainer]}>
                    <AddLogButtonComponent
                        buttonText="Single">
                    </AddLogButtonComponent>
                    <AddLogButtonComponent
                        buttonText="Start and End">
                    </AddLogButtonComponent>
                    <AddLogButtonComponent
                        buttonText="Number">
                    </AddLogButtonComponent>
                </View>
            </View>
        );
    }
}
