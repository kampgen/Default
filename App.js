import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Scene, Router, Stack } from 'react-native-router-flux'
import Login from './app/views/Login'

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
    <Router sceneStyle={{  }}>
        <Stack key='root'>
            <Scene key='login' initial component={Login} />
        </Stack>
    </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
