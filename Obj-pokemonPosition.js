let allPokemonPositionTown = [];
let allPokemonPositionTownExtension = [];

function buildPokemonPosition(array_1, array_2) {
    for (let i=0;i<array_1.length;i++){
        let pokemonPosition = new PokemonPosition(array_1[i][0],array_1[i][1],array_1[i][2],array_1[i][3],array_1[i][4]);
        array_2.push(pokemonPosition);
    }
}
buildPokemonPosition(dataPokemonPositionMapTown, allPokemonPositionTown);
buildPokemonPosition(dataPokemonPositionMapTownExtension, allPokemonPositionTownExtension);