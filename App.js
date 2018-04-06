import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Scene, Router, Stack } from 'react-native-router-flux'
import Login from './app/views/Login'
import Controller from './app/views/Controller'
import Cadastrar from './app/views/Cadastrar'

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
    <Router>
        <Stack key='root'>
            <Scene key='login' initial hideNavBar component={Login} />
            <Scene key='controller' component={Controller} />
            <Scene key='cadastrar' component={Cadastrar} />
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
