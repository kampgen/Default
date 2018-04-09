import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Scene, Router, Stack } from 'react-native-router-flux'
import Login from './app/Views/Login'
import Controller from './app/Views/Controller'
import Cadastrar from './app/Views/Cadastrar'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './app/Redux/reducer'

type Props = {};
export default class App extends Component<Props> {
    constructor() {
        super()

        this.store = createStore(reducers)

    }
  render() {
    return (
    <Provider store={this.store}>
        <Router>
            <Stack key='root'>
                <Scene key='login' initial hideNavBar component={Login} />
                <Scene key='controller' component={Controller} />
                <Scene key='cadastrar' component={Cadastrar} />
            </Stack>
        </Router>
    </Provider>
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
