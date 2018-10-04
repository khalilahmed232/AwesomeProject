import React, { Component } from 'react';
import {Text, TouchableHighlight} from 'react-native';
import styles from '../../styles';

export default class ButtonComponent extends React.Component {
    render() {
        return (
            <TouchableHighlight
                style={[styles.mainButton,this.props.style]}
                onPress={this.props.onPress} >
                <Text style={[styles.mainButtonText,this.props.textStyle]}>
                    {this.props.buttonText}
                </Text>
            </TouchableHighlight>
        );
    }
}
