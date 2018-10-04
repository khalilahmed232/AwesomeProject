import React, { Component } from 'react';
import {Text, View} from 'react-native';
import styles from '../../styles';

export default class ScreenHeader extends React.Component {
    render() {
        return (
            <View style={styles.screenTitle}>
                <Text style={[styles.screenTitleText,this.props.textStyle]}>
                    {this.props.screenTitle}
                </Text>
            </View>
        );
    }
}
