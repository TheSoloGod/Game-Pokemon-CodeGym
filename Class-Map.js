let Map = function (trainer) {
    this.thunderStone = false;
    this.isInMap = allSpecialPosition[0].name; //đánh dấu map hiện tại

    //thay đổi map
    this.checkMap = function () {

        // checkCurrentMap(2, 0, 2 ,0);
        // checkCurrentMap(3, 0, 2 ,1);
        // checkCurrentMap(0, 2, 0 ,2);
        // checkCurrentMap(1, 2, 0 ,3);

        if (trainer.x == allSpecialPosition[2].x
                && trainer.y == allSpecialPosition[2].y
                && this.isInMap == allSpecialPosition[0].name) {
            trainer.drawTrainer(trainer.buildTrainerImage());
            trainer.x = allSpecialPosition[0].x;
            trainer.y = allSpecialPosition[0].y;
            this.isInMap = allSpecialPosition[2].name;
        }else if (trainer.x == allSpecialPosition[3].x
                && trainer.y == allSpecialPosition[3].y
                && this.isInMap == allSpecialPosition[0].name) {
            trainer.drawTrainer(trainer.buildTrainerImage());
            trainer.x = allSpecialPosition[1].x;
            trainer.y = allSpecialPosition[1].y;
            this.isInMap = allSpecialPosition[2].name;
        }else if (trainer.x == allSpecialPosition[0].x
                && trainer.y == allSpecialPosition[0].y
                && this.isInMap == allSpecialPosition[2].name) {
            trainer.drawTrainer(trainer.buildTrainerImage());
            trainer.x = allSpecialPosition[2].x;
            trainer.y = allSpecialPosition[2].y;
            this.isInMap = allSpecialPosition[0].name;
        }else if (trainer.x == allSpecialPosition[1].x
                && trainer.y == allSpecialPosition[1].y
                && this.isInMap == allSpecialPosition[2].name) {
            trainer.drawTrainer(trainer.buildTrainerImage());
            trainer.x = allSpecialPosition[3].x;
            trainer.y = allSpecialPosition[3].y;
            this.isInMap = allSpecialPosition[0].name;
        }
    };
    // hàm thay thế cho phần trên nhưng không chạy
    function checkCurrentMap(index_position, index_map_1, index_map_2, index_trainer) {
        if (trainer.x == allSpecialPosition[index_position].x
            && trainer.y == allSpecialPosition[index_position].y
            && this.isInMap == allSpecialPosition[index_map_1].name) {
            trainer.drawTrainer(trainer.buildTrainerImage());
            trainer.x = allSpecialPosition[index_trainer].x;
            trainer.y = allSpecialPosition[index_trainer].y;
            this.isInMap = allSpecialPosition[index_map_2].name;
        }
    }

    // check gặp pokemon
    this.checkPokemon = function () {
        if (this.isInMap == allSpecialPosition[0].name) {
            for (let i = 0; i < allPokemonPositionTown.length; i++) {
                if (trainer.x == allPokemonPositionTown[i].x && trainer.y == allPokemonPositionTown[i].y) {
                    this.isStartBattle(allPokemonPositionTown[i].getEnemyPokemon, allPokemonPositionTown[i].getCurrentBattleField);
                }
                if(trainer.x == allSpecialPosition[13].x
                    && trainer.y == allSpecialPosition[13].y){
                    allBackGround[7].drawBackground();
                }
            }

        }
        if (this.isInMap == allSpecialPosition[2].name) {
            for (let i = 0; i < allPokemonPositionTownExtension.length; i++) {
                if (trainer.x == allPokemonPositionTownExtension[i].x && trainer.y == allPokemonPositionTownExtension[i].y) {
                    this.isStartBattle(allPokemonPositionTownExtension[i].getEnemyPokemon, allPokemonPositionTownExtension[i].getCurrentBattleField);
                }
            }
            if(trainer.x == allSpecialPosition[11].x
                && trainer.y == allSpecialPosition[11].y
                || trainer.x == allSpecialPosition[12].x
                && trainer.y == allSpecialPosition[12].y){
                allBackGround[8].drawBackground();
            }
            if(trainer.x == allSpecialPosition[8].x
                && trainer.y == allSpecialPosition[8].y
                && allPokemon[0].level >= dataLevel[2]
                && trainer.bag_2 == BAG_FULL){
                    this.thunderStone = true;
                    alert("Bạn đã nhận được đá sấm sét. Hãy tới PokéGym để tiến hóa cho Pikachu!");
            }
        }
    };

    //hàm kiểm tra xem có vào trận hay không
    this.isStartBattle = function (enemyPokemon, battleField) {
        this.enemyPokemon = enemyPokemon;
        this.battleField = battleField;
        this.confirmBattle = confirm("Bạn đã gặp " + this.enemyPokemon.name + ", bắt đầu trận đấu?");
        if (this.confirmBattle) {
            this.battleField.beginBattle(); //đánh dấu bắt đầu trận chiến
            this.battleField.drawBattleField(); // vẽ trận chiến
            this.inBattleFieldWith = this.enemyPokemon.name; //dùng để nhận biết đang trong màn hình trận chiến
        }
    };
    //hàm bao map
    this.surroundMap = function () {
        if(trainer.x<SURROUND_MAP_LEFT[0]){
            trainer.x = SURROUND_MAP_LEFT[1];
        }else if(trainer.y<SURROUND_MAP_TOP[0]){
            trainer.y = SURROUND_MAP_TOP[1];
        }else if(trainer.x>SURROUND_MAP_RIGHT[0]){
            trainer.x = SURROUND_MAP_RIGHT[1];
        }else if(trainer.y>SURROUND_MAP_DOWN[0]){
            trainer.y = SURROUND_MAP_DOWN[1];
        }
    };

    //hàm kiểm tra win
    this.checkWin = function () {
        if    (trainer.x == allSpecialPosition[6].x && trainer.y == allSpecialPosition[6].y
            || trainer.x == allSpecialPosition[7].x && trainer.y == allSpecialPosition[7].y){
            if(trainer.bag_3.length == BAG_FULL){
                alert("Bạn đã đạt danh hiệu: LEGEND POKÉMON TRAINER");
            }
            //bonus
            if(this.thunderStone){
                allPokemon[0].name = allPokemon[1].name;
                allPokemon[0].x = allPokemon[1].x;
                allPokemon[0].y = allPokemon[1].y;
                allPokemon[0].level = allPokemon[1].level;
                myPokemonExp = 1500;
                alert("Pikachu đã tiến hóa thành Raichu!");
            }
        }
    }
};