function getBattleField(enemyPokemon) {
    for (let i=0; i<allBattleField.length; i++){
        if(allBattleField[i].enemyPokemon == enemyPokemon){
            return allBattleField[i];
        }
    }
}