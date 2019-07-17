let allBattleField = [];

function buildBattleField (){
    for(let i=2; i<allPokemon.length; i++){
        let battleField = new BattleField(trainer, allPokemon[0], allPokemon[i]);
        allBattleField.push(battleField);
    }
}
buildBattleField();