import React, { Component } from 'react';
import {
  Container,
  Content,
  Text,
} from 'native-base';

import styles from '../styles';


class ReadyScreen extends Component {
  render () {
    return (
      <Container style={styles.container}>
        <Content contentContainerStyle={styles.content}>
          <Text style={styles.text}>ReadyScreen</Text>
        </Content>
      </Container>
    );
  }

}

export default ReadyScreen;
