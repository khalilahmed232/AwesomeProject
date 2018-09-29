import React, { Component } from 'react';
import { AppRegistry, View, Text,Button ,  Alert} from 'react-native';

export default class FlexDimensionsBasics extends Component {
    startLog(){
        Alert.alert("hello");
    }
    endLog(){
        Alert.alert("hello");
    }
    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{flex: 1, backgroundColor: 'powderblue'}} >
            
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
                        onPress = {this.startLog} 
                        style = {{
                            flex: 1
                        }}
                    />
                    <Button
                        title = "End"
                        onPress = {this.endLog} 
                        style = {{
                            flex: 1
                        }}
                    />
                </View>
            </View>
        );
    }
}