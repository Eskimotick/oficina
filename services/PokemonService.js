export default class PokemonService {

    // Criamos uma função assíncrona que recebe o ID do Pokemon que queremos pegar
    async getPokemon(pokemonID) {
      
        // Tentem rodar esse código
        try {

            // Faremos a requisição na url desejada
            let response = await fetch('https://pokeapi.co/api/v2/pokemon/'+pokemonID, {
                // Utilizaremos o método GET
                method: 'GET',
            });

            // Esperamos o JSON retornado da API
            let responseJson = await response.json();

            // Retornamos os dados
            return responseJson;

        }
        
        // Se der problema...
        catch (error) {

            // Olhem o terminal
            console.log(error);

        }

    }
  
  }