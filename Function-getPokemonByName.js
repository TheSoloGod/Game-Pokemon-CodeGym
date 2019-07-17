function getPokemonByName(pokemonName){
    for(let i = 0; i<allPokemon.length; i++){
        if(allPokemon[i].name == pokemonName){
            return allPokemon[i];
        }
    }
}