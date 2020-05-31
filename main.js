// fetch('https://pokeapi.co/api/v2/pokemon/')
//   .then(response => response.json())
//   .then(data => console.log(data));

// const counter = 0;

// const getPokemon = (data) => {
//     if (!data) return;
   
//     const {results} = data;
  
//     return results[counter].url;

//     counter++;
  
//   };

const allPokemons = [];

fetch('https://pokeapi.co/api/v2/pokemon/')
    .then(response => response.json())
    // .then(data => console.log(data))
    .then(data => data.results.forEach(pokemon => {
        allPokemons.push(pokemon.url);
    }));

console.log(allPokemons)

// allPokemons.forEach(pokemonURL => {
//     fetch(pokemonURL)
//     .then(response => response.json())
//     .then(data => console.log(data))
//     // .then(displayPokemon(pokemon))
//     .catch((error) => {
//         console.error('Error:', error);
//     })
//     .finally(() => {
//         console.log('finally');
//     })
// })

fetch('https://pokeapi.co/api/v2/pokemon/1')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        displayPokemon(data)
    })
    // .then(data => data.results.forEach(pokemon => {
    //     allPokemons.push(pokemon.url);
    // }));

function displayPokemon(pokemon) {
    document.getElementById("pokemon1").src = pokemon.sprites.front_default;
    // var image = document.createElement("img").src = pokemon.sprites.front_default;
    // base.appendChild(image);
    // var element = document.getElementById("new");
    // element.appendChild(tag);
}