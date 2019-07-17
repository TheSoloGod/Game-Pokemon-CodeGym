function drawEnemyPokemon (enemyPokemon){
    let pokemon_image = document.getElementById(enemyPokemon.name);
    enemyPokemon.drawPokemon(pokemon_image);
    enemyPokemon.drawHealthBarMax(HEALTH_BAR_MAX_X, HEALTH_BAR_MAX_Y);
    enemyPokemon.drawHealthBarCurrent(HEALTH_BAR_CURRENT_X, HEALTH_BAR_CURRENT_Y
        , HEALTH_BAR_CURRENT_REVERSE, COLOR_STOP_1, COLOR_STOP_2);
    pokemon_logo = document.getElementById(enemyPokemon.name+"-logo");
    enemyPokemon.drawPokemonLogo(pokemon_logo, POKEMON_LOGO_X, POKEMON_LOGO_Y);
    pokemon_name = document.getElementById(enemyPokemon.name+"-name");
    enemyPokemon.drawLevel(POKEMON_LEVEL_X, POKEMON_LEVEL_Y);
    enemyPokemon.drawPokemonName(pokemon_name, POKEMON_NAME_X, POKEMON_NAME_Y);
}