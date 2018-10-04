import React, { Component } from 'react';
import {View, Text, Alert, TextInput} from 'react-native';
import styles from '../../../styles';

import SubmitButtonComponent from '../../components/SubmitButtonComponent';
import TextInputFeildRed from '../../components/TextInputFeildRed';

import ScreenHeader from '../../components/ScreenHeader';

export default class SingleAddLogScreen extends Component {
    constructor(props) {
        super(props);
        this.state =
        {
            logName: '',
            logValue: ''
        };
    }

    submit=()=>{
        const {logName, logValue} = this.state;
        console.log(logName);
        console.log(logValue);
    }

    render() {
        return (

            <View style={{flex: 1}}>
                <ScreenHeader
                    screenTitle="Add Single Log"
                    textStyle={styles.addLogScreenTitleText}
                ></ScreenHeader>
                <View style={[styles.buttonContainer, styles.addLogButtonContainer]}>

                    <TextInputFeildRed
                        text="Log Value"
                        placeholder="Log Name"
                        onChangeText={(text) => this.setState({logName: text})}
                    ></TextInputFeildRed>

                    <TextInputFeildRed
                        text="Log Value"
                        placeholder="Log Name"
                        onChangeText={(text) => this.setState({logValue: text})}
                    ></TextInputFeildRed>
                    <SubmitButtonComponent
                        buttonText="Submit"
                        onPress={this.submit}
                        >
                    </SubmitButtonComponent>
                </View>
            </View>
        );
    }
}
