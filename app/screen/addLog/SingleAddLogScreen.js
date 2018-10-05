import React, { Component } from 'react';
import {View, Text, Alert, TextInput, AsyncStorage} from 'react-native';
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

    submit=async(arg)=>{
        console.log(arg);
        const {logName, logValue} = this.state;
        console.log(logName);
        console.log(logValue);
        await AsyncStorage.getItem('loggedItems')
            .then(data => {
                data = data || '[]';
                loggedItems = JSON.parse(data);

                newId = Math.max.apply(Math, loggedItems.map(function(o) { return o.id; }));
                newId = newId + 1;

                startTime = new Date().getTime();
                if ( arg == 'submit' )
                {
                    endTime = startTime;
                }
                else if  ( arg == 'submitandendlater' )
                {
                    endTime = '';
                }
                else
                {
                    endTime = '';
                }
                
                loggedItems.push(
                    {
                        id: newId,
                        logName: logName,
                        logValue: logValue,
                        startTime: startTime,
                        endTime: endTime,
                    }
                )
                AsyncStorage.setItem('loggedItems',JSON.stringify(loggedItems));
            }).done();


    }

    display=async()=>{
        try {
            let loggedItems = await AsyncStorage.getItem('loggedItems');
            let parsed = JSON.parse(loggedItems);
            console.log(parsed);


        } catch (e) {
            console.log(e);
        } finally {

        }

    }

    render() {
        return (

            <View style={{flex: 1}}>
                <ScreenHeader
                    screenTitle="Add Log"
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
                        onPress={() => this.submit('submit')}
                        >
                    </SubmitButtonComponent>

                    <SubmitButtonComponent
                        buttonText="Submit and End Later"
                        onPress={() => this.submit('submitandendlater')}
                        >
                    </SubmitButtonComponent>

                    <SubmitButtonComponent
                        buttonText="Display"
                        onPress={this.display}
                        >
                    </SubmitButtonComponent>
                </View>
            </View>
        );
    }
}
