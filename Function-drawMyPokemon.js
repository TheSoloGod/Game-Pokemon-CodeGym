function drawMyPokemon(myPokemon) {
    let myPokemon_image = document.getElementById(myPokemon.name);
    myPokemon.drawPokemon(myPokemon_image);
    myPokemon.drawHealthBarMax(MY_POKEMON_HEALTH_BAR_MAX_X, MY_POKEMON_HEALTH_BAR_MAX_Y);
    myPokemon.drawHealthBarCurrent(MY_POKEMON_HEALTH_BAR_CURRENT_X, MY_POKEMON_HEALTH_BAR_CURRENT_Y
        , MY_POKEMON_HEALTH_BAR_CURRENT_ORIENTATION, COLOR_STOP_3, COLOR_STOP_1);
    let pokemon_logo = document.getElementById(myPokemon.name + "-logo");
    myPokemon.drawPokemonLogo(pokemon_logo, MY_POKEMON_LOGO_X, MY_POKEMON_LOGO_Y);
    let pokemon_name = document.getElementById(myPokemon.name + "-name");
    myPokemon.drawPokemonName(pokemon_name, MY_POKEMON_NAME_X, MY_POKEMON_NAME_Y);
    myPokemon.drawLevel(MY_POKEMON_LEVEL_X, MY_POKEMON_LEVEL_Y);
    if(isMyPokemonAttack == true){
        let effect = document.getElementById("thunder");
        myPokemon.drawEffect(effect, MY_POKEMON_EFFECT_X, MY_POKEMON_EFFECT_Y);
    }
}