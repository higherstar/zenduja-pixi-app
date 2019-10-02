import React, { Component } from 'react';
import {
  Container,
  Content,
  Text,
} from 'native-base';

import styles from '../styles';


class FlareScreen extends Component {
  render () {
    return (
      <Container style={styles.container}>
        <Content contentContainerStyle={styles.content}>
          <Text style={styles.text}>FlareScreen</Text>
        </Content>
      </Container>
    );
  }

}

export default FlareScreen;
