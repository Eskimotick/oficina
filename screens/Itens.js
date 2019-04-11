import React, { Component } from 'react';
import { StyleSheet, Button, View, ScrollView } from 'react-native';

export default class Itens extends Component {


  constructor(props) {

    super(props);

    let colors = [];
    let hex = ['1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];

    for (let i = 0; i < 20; i++) {

      let color = "#";
      for (let c = 0; c<6; c++) {
        color += hex[ Math.round(Math.random()*(hex.length-1)) ];
      }

      colors.push( color );

    }

    this.state = {
      itens: colors,
    }

  }

  buttonPressed( event, data ) {
    this.props.navigation.navigate("Detalhes", {index: data.i, value: data.v});
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        { this.state.itens.map(
          (value, index) =>
            <View key={index} style={styles.margin}>
              <Button
                color={value}
                style={styles.button}
                title={"Botão "+index}
                onPress={
                  (event) => {
                    this.buttonPressed(event, {i: index, v: value});
                  }
                }
              /> 
            </View>
        ) }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    marginVertical: 16,
  },
  button: {
    backgroundColor: '#6D0227',
  },
  margin: {
    marginVertical: 16,
  }
});
