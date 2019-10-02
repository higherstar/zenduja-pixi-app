import React, { Component } from 'react';
import {
  Container,
  Content,
  Text,
} from 'native-base';


import styles from './styles';

import Files from "./Screens/PixiInter/Files";
import {Loading } from './Screens/PixiInter'
import cacheAssetsAsync from '../../PixiUtils/engine/cacheAssetsAsync';
import arrayFromObject from '../../PixiUtils/engine/arrayFromObject';

class Game extends Component {
  state = {
    assetsLoaded: false,
    sceneLoaded: false,
  };

  async componentDidMount() {
    this.loadAssetsAsync();
  }

  loadAssetsAsync = async () => {
    try {
      await cacheAssetsAsync({
        files: arrayFromObject(Files)
      });
    } catch (e) {
      console.warn(
        'There was an error caching assets (see: app.js), perhaps due to a ' +
        'network timeout, so we skipped caching. Reload the app to try again.'
      );
      console.log(e.message);
    } finally {
      this.setState({ assetsLoaded: true });
    }
  }

  renderLoading = () => (<Loading />);

  render () {
    const { assetsLoaded, sceneLoaded } = this.state;
    if (!assetsLoaded) {
      return this.renderLoading();
    }
    return (
      <Container style={styles.container}>
        <Content contentContainerStyle={styles.content}>
          <p>asdfasdf</p>
          {!sceneLoaded && this.renderLoading()}
        </Content>
      </Container>
    )
  }
}

export default Game;
