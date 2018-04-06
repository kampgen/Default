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

    _changeState() {
        this.setState({ email: 'testando.123@teste.com' })
    }

  render() {
    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding">
            {/* <Image
                style={{ width: 290, height: 100}}
                source={logo}
            /> */}
            <TextInput
                value={this.state.email}
                placeholder='exemplo@email.com'
                autoFocus
                style={styles.input}
                keyboardType='email-address'
                // placeholderTextColor='#F5FCFF'
                onChangeText={text => this.setState({ email: text })}
            />
            <TextInput
                value={this.state.password}
                keyboardType='email-address'
                secureTextEntry
                style={styles.input}
                placeholder="senha"
                // placeholderTextColor='#F5FCFF'
                onChangeText={text => this.setState({ password: text })}
            />
            <View style={{width: 200, height: 80, justifyContent: 'space-between', marginTop: 10}}>
                <Button
                    onPress={() => this.toLogin()}
                    title='Entrar'
                    style={{flex: 1, alignSelf: 'stretch', height: 50}}
                />
                <Button
                    onPress={() => Actions.cadastrar()}
                    title='Cadastrar'
                    style={{flex: 1, alignSelf: 'stretch', height: 50}}
                />
            </View>
            <Button
                onPress={() => this._changeState()}
                title='Teste'
                style={{flex: 1, alignSelf: 'stretch', height: 50}}
            />
        </KeyboardAvoidingView>
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
