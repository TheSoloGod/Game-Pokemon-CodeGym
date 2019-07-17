let allPokemon = [];

function buildPokemon () {
    for (let i = 0; i < dataPokemon.length; i++) {
        let pokemon = new Pokemon(dataPokemon[i][0], dataPokemon[i][1], dataPokemon[i][2], dataPokemon[i][3], dataPokemon[i][4]);
        allPokemon.push(pokemon);
    }
}
buildPokemon();

trainer.bag.push(allPokemon[0]);
allPokemon[0].isMyPokemon = true;
let isMyPokemonAttack = false;
let isMyPokemonWin = false;
let myPokemonExp = 0;