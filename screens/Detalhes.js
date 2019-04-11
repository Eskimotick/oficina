import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Detalhes extends Component {

  constructor(props){

    super(props);

    this.state = {
      index: this.props.navigation.getParam("index"),
      value: this.props.navigation.getParam("value", -1),
    }

  }


  render() {
    return (
      <View style={styles.container}>
        <Text>Cor do botão {this.state.index}!</Text>
        <Text>Valor: {this.state.value.toUpperCase()}!</Text>
      </View>
    );
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: '10%'
  },
});
