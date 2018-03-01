import React, {Component} from 'react'
import {
    Platform,
    StyleSheet,
    Text,
    View
  } from 'react-native';
  
  type Props = {};
  export default class Login extends Component<Props> {
    render() {
      return (
            <Text>{this.props.question}</Text>
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
  