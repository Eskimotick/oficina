import React, { Component } from 'react';
import { StyleSheet, Button, View, ScrollView, Text } from 'react-native';

export default class Itens extends Component {


  // Construtor da classe, recebe propriedades ao ser criada
  constructor(props) {
    // Aplica esses atributos à classe pai (coisa de OO)
    super(props);

    // Criamos uma lista de cores
    let colors = [];
    // Colocamos uma cor aleatória nela (função ta no final do arquivo, foco)
    colors.push( generateRandomColor() );

    // Criamos nosso state e atribuímos nossa lista de cores para o atributo itens
    this.state = {
      itens: colors,
    }

  }
  
  buttonPressed( data ) {
    // Utilizamos o método navigate para ir para a página 'Detalhes' e passamos os valores desejados (ver construtor da página 'Detalhes')
    this.props.navigation.navigate("Detalhes", {index: data.i, value: data.v});
  }

  addButton() {
    // Colocamos uma cor a mais nos nossos itens
    this.setState( previousState => ({
      itens: [...previousState.itens, generateRandomColor()]
    }));
  }

  removeButton() {
    // Removemos o último elemento dos itens
    this.setState( previousState => ({
      itens: previousState.itens.slice(0, previousState.itens.length-1)
    }));
  }

  render() {
    return (

      // Queremos uma ScrollView pois podemos ter elementos em excesso e precisaremos descer a página para vê-los
      <ScrollView contentContainerStyle={styles.container}>

        { 
          
          // Chamamos o método map para pegarmos todo o nosso array de itens
          this.state.itens.map( (value, index) =>
            
            // Vamos atribuir uma chave ao elemento
            <View key={index+1} style={styles.margin}>
              
              <Button
                // Criamos um botão e passamos os valores do nosso array para alguns de seus atributos
                color={value}
                style={styles.button}
                title={"Botão "+(index+1)}
                onPress={ () => {
                  // Chamamos a função buttonPressed com os argumentos que queremos passar pra outra tela
                  this.buttonPressed({
                    i: index+1,
                    v: value
                  });
                }}
              />

            </View>
          )

        }

        {
          //Renderizamos os dois botões principais: adicionar e remover botão
        }
        <View style={styles.containerBotao}>
          <Button
            color='#9FBF9F'
            title='Adicionar botão'
            onPress={() => {this.addButton()}}
          />
        </View>

        <View style={styles.containerBotao}>
          <Button
            color='#BF9F9F'
            title=' Remover botão '
            onPress={() => {this.removeButton()}}
          />
        </View>
        
      </ScrollView>
    );
  }
}

// CSS q importa talvez
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    marginVertical: 16,
  },
  containerBotao: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    marginTop: 32,
  },
  button: {
    backgroundColor: '#6D0227',
  },
  margin: {
    marginVertical: 16,
  }
});

// Gambiarra
function generateRandomColor() {
  
  let hex = ['1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
  
  let color = "#";
  for (let c = 0; c<6; c++)
    color += hex[ Math.round(Math.random()*(hex.length-1)) ];
  
    return color

}