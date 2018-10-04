import React, { Component } from 'react';
import ButtonComponent from './ButtonComponent';
import styles from '../../styles';

export default class SubmitButtonComponent extends Component {
    render() {
        return (
            <ButtonComponent
                buttonText={this.props.buttonText}
                style={styles.submitButton}
                textStyle={styles.submitButtonText}
                onPress={this.props.onPress}
                >
            </ButtonComponent>
        );
    }
}
