import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from '../../styles';
export default class Loading extends Component {
  static defaultProps = {
    text: "Loading..."
  }
  render() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{this.props.text}</Text>
        </View>
    );
  }
}

