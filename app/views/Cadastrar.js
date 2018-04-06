import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  Image,
  Button,
  KeyboardAvoidingView
} from 'react-native';
import { Actions } from 'react-native-router-flux'

const logo = require('../images/logo.png')
const window = Dimensions.get('window');

const IMAGE_HEIGHT = window.width / 2;
const IMAGE_HEIGHT_SMALL = window.width /7;
//

export default class Login extends Component {
constructor(props) {
    super(props)

    this.state = {
        email: '',
        password: '',
    }
}

    toLogin() {
        //fazer login
        if (this.state.email !== '' && this.state.password !== '') {
            Actions.controller()
        }
    }

  render() {
    return (
        <View>
            <Text>Cadastro</Text>
            <Button
                onPress={() => Actions.pop()}
                title="Voltar"
                style={{ backgroundColor: 'red' }}/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(29, 92, 145)',
  },
  input: {
    height: 50,
    backgroundColor: '#fff',
    marginHorizontal: 10,
    marginVertical: 5,
    width: window.width - 30,
  },
  logo: {
    height: IMAGE_HEIGHT,
    resizeMode: 'contain',
    marginBottom: 20,
    padding:10,
    marginTop:20
  },
});
