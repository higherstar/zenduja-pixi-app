import { createStackNavigator } from 'react-navigation';

import FlareScreen from '../containers/Game/Screens/FlareScreen';
import JoinScreen from '../containers/Game/Screens/JoinScreen';
import ReadyScreen from '../containers/Game/Screens/ReadyScreen';
import StartScreen from '../containers/Game/Screens/StartScreen';
import Game from '../containers/Game/index';

const GameNavigator = createStackNavigator({
  Game: {
    screen: Game,
    navigationOptions: {
      header: null,
    },
  },
  GameJoin: {
    screen: JoinScreen,
    navigationOptions: {
      title: 'Home',
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
  GameReady: {
    screen: ReadyScreen,
    navigationOptions: {
      header: null,
    },
  },
  GameFlareView: {
    screen: FlareScreen,
    navigationOptions: {
      header: null,
    },
  },
  GameStart: {
    screen: StartScreen,
    navigationOptions: {
      header: null,
    },
  },
});

export default GameNavigator;
