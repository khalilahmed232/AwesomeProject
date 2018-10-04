import React, { Component } from 'react';
import {View, Text} from 'react-native';
import styles from '../../../styles';

import SubmitButtonComponent from '../../components/SubmitButtonComponent';
import TextInputFeildRed from '../../components/TextInputFeildRed';

import ScreenHeader from '../../components/ScreenHeader';

export default class SingleAddLogScreen extends Component {
    render() {
        return (

            <View style={{flex: 1}}>
                <ScreenHeader
                    screenTitle="Add Single Log"
                    textStyle={styles.addLogScreenTitleText}
                ></ScreenHeader>
                <View style={[styles.buttonContainer, styles.addLogButtonContainer]}>
                    <TextInputFeildRed></TextInputFeildRed>


                    <SubmitButtonComponent
                        buttonText="Submit">
                    </SubmitButtonComponent>
                </View>
            </View>
        );
    }
}
