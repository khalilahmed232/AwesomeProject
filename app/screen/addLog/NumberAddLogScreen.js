import React, { Component } from 'react';
import {View, Text} from 'react-native';
import styles from '../../../styles';
import SubmitButtonComponent from '../../components/SubmitButtonComponent';
import ScreenHeader from '../../components/ScreenHeader';

export default class NumberAddLogScreen extends Component {
    render() {
        return (

            <View style={{flex: 1}}>
                <ScreenHeader
                    screenTitle="Add Number Log"
                    textStyle={styles.addLogScreenTitleText}
                ></ScreenHeader>
                <View style={[styles.buttonContainer, styles.addLogButtonContainer]}>
                    <SubmitButtonComponent
                        buttonText="Submit">
                    </SubmitButtonComponent>
                </View>
            </View>
        );
    }
}
