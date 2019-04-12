import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import PokemonService from '../services/PokemonService';

export default class Detalhes extends Component {

  // Construtor da classe, recebe propriedades ao ser criada
  constructor(props) {
    // Aplica esses atributos à classe pai (coisa de OO)
    super(props);

    // State da página
    this.state = {

      // Pegamos os valores passados da página anterior
      index: this.props.navigation.getParam("index"),
      // Neste caso, colocamos um valor padrão caso 'value' não exista
      value: this.props.navigation.getParam("value", -1),

      // Valores que utilizaremos para guardar dados da API
      name: '',
      image: null,

    }

    // Instanciamos nosso objeto que fará requisições na API
    this.api = new PokemonService;

  }

  // Função que chama a PokemonService e trata os dados
  pegaPokemon() {
    
    // Chamamos a função da nossa service e esperamos a resposta
    this.api.getPokemon(this.state.index).then(
      
      // Depois, pegamos a resposta (um JSON é retornado, veja a PokemonService)
      (res)=>{

        // Pegamos os valores que queremos do JSON
        let name = res.name;
        let img = res.sprites.front_default;
        
        // Atualizamos nosso state
        this.setState({
          name: name,
          image: img,
        });

      }

    )
  }

  // Componente de detalhes do botão da página anterior
  TextoDetalhes(params) {
    return (
      <View>
        <Text>Cor do botão {this.state.index}!</Text>
        <Text>Valor: {this.state.value}!</Text>
      </View>
    );
  }
  
  // Componente do botão de pegar o Pokemon
  BotaoPokemon(params) {
    return (
      <View style={{marginVertical: 16}}>
        <Button
          color={params.color}
          title={params.title}
          onPress={() => {this.pegaPokemon()}}
        />
      </View>
    );
  }
  
  // Componente do Pokemon
  Pokemon(params) {
    return (
      <View style={{alignItems: 'center'}}>
        <Text>
          {
            // Nome do Pokemon com a primeira letra maiúscula
            this.state.name.slice(0,1).toUpperCase() + this.state.name.slice(1,this.state.name.length)
          }
        </Text>
        <Image
          style = {
            // Atribuímos o tamanho da imagem de acordo com o que recebemos nos parâmetros
            {width: params.w, height: params.h}
          }
          source={{uri: this.state.image}}
        />
      </View>
    );
  }


  render() {
    return (
      <View style={styles.container}>
        
        {
          // Texto de detalhes do botão
          this.TextoDetalhes()
        }

        {
          // Botão que chama a função pegaPokemon()
          this.BotaoPokemon({
            color:'#F00',
            title:'Pegue um Pokemon',
          })
        }

        {
          // Se existir uma imagem
          (this.state.image)
          ?
            // Renderizamos o nosso componente de imagem com o tamanho desejado
            this.Pokemon({
              w: 128, h: 128
            })
          :
            // Senão, não renderizamos nada
            null
        }

      </View>

    );

  }

}

// CSS lol ngm liga
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: '10%'
  },
});
