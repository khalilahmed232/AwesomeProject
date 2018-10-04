import React, { Component } from 'react';
import {TextInput} from 'react-native';
import ButtonComponent from './ButtonComponent';
import styles from '../../styles';

export default class TextInputFeildRed extends Component {
    render() {
        return (
            <TextInput
                style={styles.textInputFeildRed}
                underlineColorAndroid="transparent"
                placeholder={this.props.placeholder}
                onChangeText={this.props.onChangeText}
                text={this.props.text}
                >
            </TextInput>
        );
    }
}
