//hàm nhận ấn phím
function moveSelection(evt) {
    switch (evt.keyCode) {
        case 32://space
            battle();
            break;
        case 37://left
            if(!allPokemon[0].isInBattle) {
                trainer.moveLeft();
            }
            break;
        case 39://right
            if(!allPokemon[0].isInBattle) {
                trainer.moveRight();
            }
            break;
        case 38://up
            if(!allPokemon[0].isInBattle) {
                trainer.moveUp();
            }
            break;
        case 40://down
            if(!allPokemon[0].isInBattle) {
                trainer.moveDown();
            }
            break;
        case 49://bag1
            if(!allPokemon[0].isInBattle) {
                if (trainer.isShowBag) {
                    trainer.drawTrainer(trainer.buildTrainerImage());
                    trainer.isShowBag = false;
                } else {
                    trainer.showBag(trainer.bag);
                }
            }
            break;
        case 50://bag2
            if(!allPokemon[0].isInBattle) {
                if (trainer.isShowBag) {
                    trainer.drawTrainer(trainer.buildTrainerImage());
                    trainer.isShowBag = false;
                } else {
                    trainer.showBag(trainer.bag_2);
                }
            }
            console.log(trainer.bag);
            console.log(trainer.bag_2);
            console.log(trainer.bag_3);
            break;
        case 51://bag3
            if(!allPokemon[0].isInBattle) {
                if (trainer.isShowBag) {
                    trainer.drawTrainer(trainer.buildTrainerImage());
                    trainer.isShowBag = false;
                } else {
                    trainer.showBag(trainer.bag_3);
                }
            }
            console.log(allPokemon[0].level);
            console.log(myPokemonExp);
            break;
        case 13: //enter
            if(!guide){
                allBackGround[7].drawBackground();
                guide = true;
            }else {
                if(!allPokemon[0].isInBattle) {
                    trainer.drawTrainer(trainer.buildTrainerImage());
                }
            }
            break;
        case 71: //G
            allBackGround[7].drawBackground();
            break;
    }
}