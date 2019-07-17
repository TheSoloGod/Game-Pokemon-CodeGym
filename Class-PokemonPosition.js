let PokemonPosition = function (x, y, myPokemonName, enemyPokemonName) {
    this.x = x;
    this.y = y;
    this.myPokemonName = myPokemonName;
    this.enemyPokemonName = enemyPokemonName;

    this.getMyPokemon = getPokemonByName(this.myPokemonName);
    this.myPokemon = this.getMyPokemon;

    this.getEnemyPokemon = getPokemonByName(this.enemyPokemonName);
    this.enemyPokemon = this.getEnemyPokemon;

    this.getCurrentBattleField = getBattleField(this.enemyPokemon);
    this.currentbattleField = this.getCurrentBattleField;
};