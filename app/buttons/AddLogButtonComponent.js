import React, { Component } from 'react';
import ButtonComponent from './ButtonComponent';
import styles from '../../styles';

export default class AddLogButtonComponent extends Component {
    render() {
        return (
            <ButtonComponent
                buttonText={this.props.buttonText}
                style={styles.addLogButton}
                textStyle={styles.addLogButtonText}
                >
            </ButtonComponent>
        );
    }
}
