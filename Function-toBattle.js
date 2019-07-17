// hàm xử lý trận chiến gán vào space //có thể gom vào đối tượng pokemonPosition trong Map
function battle() {
    if (allPokemon[0].isInBattle && map.enemyPokemon.isInBattle) {
        map.battleField.changeAttack();
        map.battleField.drawBattleField();
    } else if (!map.enemyPokemon.isInBattle) {
        map.battleField.endBattle();
    }
}