let BattleField = function (trainer, myPokemon, enemyPokemon) {
    this.myPokemon = myPokemon;
    this.enemyPokemon = enemyPokemon;
    this.trainer = trainer;

    this.beginBattle = function () {
        this.myPokemon.isInBattle = true;
        this.enemyPokemon.isInBattle = true;
        this.enemyPokemon.currentHp = this.enemyPokemon.hpMax;
        this.myPokemon.currentHp = this.myPokemon.hpMax;
    };

    this.drawBattleField = function() {
        //vẽ background
        for (let i=0; i<allBackGround.length; i++){
            if(this.enemyPokemon.type == allBackGround[i].type){
                allBackGround[i].drawBackground();
            }
        }
        //vẽ enemy pokemon
        drawEnemyPokemon(this.enemyPokemon);
        //vẽ my pokemon
        drawMyPokemon(allPokemon[0]);
    };

    this.changeAttack = function () {
        if(isMyPokemonAttack == false){
            this.myPokemon.damage = (random(RANDOM_DAMAGE[0], RANDOM_DAMAGE[1]) * this.myPokemon.level) + myPokemonExp*DAMAGE_BONUS;
            this.enemyPokemon.damage = random(RANDOM_DAMAGE[0], RANDOM_DAMAGE[1]) * this.enemyPokemon.level;
            this.myPokemon.attack(this.trainer, this.enemyPokemon);
            isMyPokemonAttack = true;
        }else {
            this.myPokemon.damage = (random(RANDOM_DAMAGE[0], RANDOM_DAMAGE[1]) * this.myPokemon.level) + myPokemonExp*DAMAGE_BONUS;
            this.enemyPokemon.damage = random(RANDOM_DAMAGE[0], RANDOM_DAMAGE[1]) * this.enemyPokemon.level;
            this.enemyPokemon.attack(this.trainer, this.myPokemon);
            isMyPokemonAttack = false;
        }
    };

    this.increaseExp = function () { //dành riêng cho myPokemon là Pikachu
        if(isMyPokemonWin){
            myPokemonExp += EXP_INCREASE * enemyPokemon.level;
            console.log(myPokemonExp);
            for (let i=0; i<dataLevelUp.length; i++){
                if(myPokemonExp < dataLevelUp[i]){
                    allPokemon[0].level = dataLevel[i];
                    console.log(dataLevel[i]);
                    break;
                }else {
                    allPokemon[0].level = dataLevel[dataLevel.length-1];
                }
            }
        }
    };

    this.endBattle = function () {
        this.myPokemon.isInBattle = false;
        this.enemyPokemon.isInBattle = false;
        map.inBattleFieldWith = "";
        isMyPokemonAttack = false;
        this.enemyPokemon.currentHp = this.enemyPokemon.hpMax;
        this.myPokemon.currentHp = this.myPokemon.hpMax;
        this.increaseExp();
        this.trainer.drawTrainer(this.trainer.buildTrainerImage());
    }
};