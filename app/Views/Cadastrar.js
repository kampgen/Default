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
});
