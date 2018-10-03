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

export default class FlexDimensionsBasics extends Component {
    sample(){

    }

    render() {
        return (
            <View style={{flex: 1}}>
                <View style={styles.appTitle}>
                    <Text style={styles.appTitleText}>Re Log</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableHighlight
                        style={styles.mainButton}
                        onPress={this.sample} >
                        <Text style={styles.mainButtonText}> Add Log </Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.mainButton}
                        onPress={this.sample} >
                        <Text style={styles.mainButtonText}> View Log </Text>
                    </TouchableHighlight>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    appTitle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    appTitleText: {
        textAlign: 'center',
        fontSize: 40,
        fontWeight: 'bold',
        color: '#489892',
    },
    buttonContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    mainButton: {
        justifyContent: 'center',
        backgroundColor: '#EAE194',
        height: 60,
        width: '60%',
        margin: 10,
        borderRadius: 25,
        borderColor: '#000000',
        borderWidth: 1
    },
    mainButtonText: {
        textAlign: 'center',
        fontSize: 25,
    }
});
