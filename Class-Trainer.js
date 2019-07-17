let Trainer = function (x, y, name, speed, level) {
    this.x = x;
    this.y = y;
    this.name = name;
    this.speed = speed;
    this.level = level;
    this.bag = [];
    this.bag_2 = [];
    this.bag_3 = [];
    this.canvas = canvas;
    this.ctx = ctx;
    this.image = null;
    this.isShowBag = false;
    this.pokemonExist = false;

    // chức năng bắt pokemon
    this.wantCatch = false; //có muốn bắt hay không
    this.catchPokemon = function (enemyPokemon) {
        if(enemyPokemon.currentHp == 0){
            isMyPokemonWin = true;
            this.wantCatch = confirm("Bạn có muốn bắt Pokémon " + enemyPokemon.name + " ?");
            if (this.wantCatch) {
                enemyPokemon.catched(enemyPokemon); //kiểm tra tỉ lệ bắt pokemon theo level
                if (enemyPokemon.isCatch) {
                    this.isPokemonInBag(this.bag, enemyPokemon); //kiểm tra pokemon trong túi 1 2 3
                    this.isPokemonInBag(this.bag_2, enemyPokemon);
                    this.isPokemonInBag(this.bag_3, enemyPokemon);
                    // có thể rút gọn  bằng cách tạo đối tượng "bag" để gom nhóm các function
                    if (this.pokemonExist == false) { //kiểm tra túi pokemon
                        if (this.bag.length < 5) {
                            this.bag.push(enemyPokemon);
                        } else if (this.bag_2.length < 5) {
                            this.bag_2.push(enemyPokemon);
                        } else if (this.bag_3.length < 5) {
                            this.bag_3.push(enemyPokemon);
                        }
                        alert("Đã bắt Pokémon " + enemyPokemon.name);
                    } else {
                        alert("Pokémon " + enemyPokemon.name + " đã có trong Pokéball");
                        this.pokemonExist = false;
                    }
                    enemyPokemon.isInBattle = false;
                } else {
                    alert("Bắt hụt Pokémon " + enemyPokemon.name);
                    enemyPokemon.isInBattle = false;
                }
            }
        }
    };
    //kiểm tra đã có pokemon này chưa
    this.isPokemonInBag = function (bag, enemyPokemon) {
        for (let j=0; j<bag.length; j++){
            if(bag[j] == enemyPokemon){
                this.pokemonExist = true;
            }
        }
    };

    this.showBag = function (bag) { //đã xong //code tham khảo a Hoàng
        this.isShowBag = true;
        allBackGround[5].drawBackground();
        document.getElementById("bag").innerHTML = "";
        for (let i=0; i<bag.length; i++){
            bag[i].getPokeBall();
            bag[i].drawPokeBalls(i);
        }
    };
    //hướng di chuyển cài vào biến orientation
    this.orientationUp = "up";
    this.orientationDown = "down";
    this.orientationLeft = "left";
    this.orientationRight = "right";
    this.orientationDefault = this.orientationDown;
    this.orientation = this.orientationDefault;
    //tạo step 1 2
    this.stepDefault = "1";
    this.step = function () {
        if(this.stepDefault == "1"){
            this.stepDefault = "2";
            return "1";
        }else {
            this.stepDefault = "1";
            return "2";
        }
    };
    //build ảnh trainer
    this.buildTrainerImage = function () {
        let sourceTrainerImage = document.getElementById("trainer");
        sourceTrainerImage.src = "img/" + this.orientation + this.step() + ".png";
        return sourceTrainerImage;
    };
    //vẽ ảnh trainer
    this.drawTrainer = function (trainer_image) {
        this.image = trainer_image;
        this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
        this.ctx.beginPath();
        if(map.isInMap == allSpecialPosition[2].name){
            allBackGround[1].drawBackground();
        }else if(map.isInMap == allSpecialPosition[0].name){
            allBackGround[0].drawBackground();
        }
        this.ctx.drawImage(this.image, this.x, this.y);
    };
    //hàm move // có thể rút gọn bằng request animation frame
    this.moveUp = function () {
        this.orientation = this.orientationUp;
        this.y -= this.speed;
        this.image = this.buildTrainerImage();
        this.drawTrainer(this.image);
        map.surroundMap();
        map.checkMap();
        map.checkPokemon();
        map.checkWin();
        console.log(this.x, this.y);
    };
    this.moveDown = function () {
        this.orientation = this.orientationDown;
        this.y += this.speed;
        this.image = this.buildTrainerImage();
        this.drawTrainer(this.image);
        map.surroundMap();
        map.checkMap();
        map.checkPokemon();
        map.checkWin();
        console.log(this.x, this.y);
    };
    this.moveLeft = function () {
        this.orientation = this.orientationLeft;
        this.x -= this.speed;
        this.image= this.buildTrainerImage();
        this.drawTrainer(this.image);
        map.surroundMap();
        map.checkMap();
        map.checkPokemon();
        map.checkWin();
        console.log(this.x, this.y);
    };
    this.moveRight = function () {
        this.orientation = this.orientationRight;
        this.x += this.speed;
        this.image = this.buildTrainerImage();
        this.drawTrainer(this.image);
        map.surroundMap();
        map.checkMap();
        map.checkPokemon();
        map.checkWin();
        console.log(this.x, this.y);
    }
    //khi ấn nút
    //chọn orientation -> build -> draw
};