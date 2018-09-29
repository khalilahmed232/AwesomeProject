import React, { Component } from 'react';
import { AppRegistry, View, Text,Button ,  Alert, TextInput} from 'react-native';

export default class FlexDimensionsBasics extends Component {

    constructor(props){
        super(props);
        this.state = {
            logName: '', 
            isStarted: false,
            isEnded: false
        };
    }

    startLog(logName){
        this.setState({isStarted : true});
        Alert.alert(logName);
    }
    endLog(){
        Alert.alert("hello2");
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'powderblue'
                }} >
                    <TextInput
                        style={{
                            borderColor: 'gray', 
                            borderWidth: 1,
                            width: '80%',
                            fontSize : 20,
                            height: '20%'
                        }} 
                        onChangeText = {
                            (logName) => this.setState({logName})
                        }
                    />
                    </View>
                <View style= {{
                        flex: 2,
                        backgroundColor: 'skyblue',
                        alignItems: 'center',
                        flexDirection: 'row',
                        justifyContent: 'space-around'
                    }} >
                    
                    <Button
                        title = "Start"
                        onPress = {
                           () =>  this.startLog(this.state.logName)
                        } 
                        style = {{
                            flex: 1
                        }}
                        disabled = { this.state.logName == '' }
                    />
                    <Button
                        title = "End"
                        onPress = {this.endLog} 
                        style = {{
                            flex: 1
                        }}
                        disabled = {!this.state.isStarted}
                    />
                </View>
            </View>
        );
    }
}