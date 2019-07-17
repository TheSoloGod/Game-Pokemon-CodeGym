let Pokemon = function (x, y, name, type, level) { //thiếu vài CONST
    this.x = x;
    this.y = y;
    this.name = name;
    this.type = type;
    this.level = level;
    this.hpMax = BASE_HP + (FLEXIBLE_HP * this.level);
    this.currentHp = this.hpMax;
    this.damage = random(RANDOM_DAMAGE[0], RANDOM_DAMAGE[1]) * this.level;
    this.isMyPokemon = false;
    this.isCatch = false;
    this.isInBattle = false;

    this.canvas = canvas;
    this.ctx = ctx;
    //tấn công
    this.attack = function (trainer, enemyPokemon) {
        enemyPokemon.takeDamage(this);
        if(enemyPokemon.isMyPokemon == false) {
            trainer.catchPokemon(enemyPokemon);
        }else {
            if(enemyPokemon.currentHp == 0){
                alert(enemyPokemon.name + " thua");
                isMyPokemonWin = false; // dành riêng cho pikachu, chưa phát triển cho myPokemon
                this.isInBattle = false;
                enemyPokemon.isInBattle = false;
            }
        }
    };
    //ăn damage
    this.takeDamage = function (enemyPokemon) {
        if((this.currentHp - enemyPokemon.damage) < 0 && enemyPokemon.currentHp > 0){
                this.currentHp = 0;
        }else if(this.currentHp - enemyPokemon.damage > 0) {
            this.currentHp -= enemyPokemon.damage;
        }else if(this.currentHp < 0){
            this.currentHp = 0;
        }
    };
    //tỉ lệ % bắt được
    this.catched = function (enemy_Pokemon) {
        for (let i=0; i<dataLevel.length; i++){
            if(enemy_Pokemon.level == i){
                if(random(CATCH_RANDOM[0], CATCH_RANDOM[1]) <= dataLevel[dataLevel.length-1-i]+1){// tăng tỉ lệ bắt thêm 10%
                    this.isCatch = true;
                }else {
                    this.isCatch = false;
                }
            }
        }
    };
    //vẽ thanh máu max
    this.drawHealthBarMax = function (x, y) {
        this.ctx.beginPath();
        this.ctx.rect(x, y, HEALTH_MAX_WIDTH, HEALTH_MAX_HEIGHT);
        this.ctx.stroke();
    };
    //màu thanh máu
    this.healthBarColor = function (color_stop_1, color_stop_2) {
        this.gradient = ctx.createLinearGradient(0, 0, HEALTH_MAX_WIDTH, 0);
        this.gradient.addColorStop(color_stop_1, COLOR_1);
        this.gradient.addColorStop(color_stop_2, COLOR_2);
        this.ctx.fillStyle = this.gradient;
        this.ctx.fill();
    };
    //vẽ thanh máu hiện tại
    this.drawHealthBarCurrent = function (x, y, z, color_stop_1, color_stop_2) { //z hướng thanh máu
        this.healthBarCurrent = Math.round(HEALTH_MAX_WIDTH * (this.currentHp/this.hpMax));
        this.ctx.beginPath();
        this.ctx.rect(x+1, y+1, (this.healthBarCurrent-1)*z, HEALTH_MAX_HEIGHT-2); //do current bar bên trong max bar
        this.healthBarColor(color_stop_1, color_stop_2);
    };
    //vẽ level
    this.drawLevel = function (x, y) {
        this.ctx.beginPath();
        this.ctx.font = FONT;
        this.ctx.fillStyle = COLOR_1;
        this.ctx.fillText("Lv." + this.level, x, y);
    };
    //vẽ pokemon
    this.drawPokemon = function (pokemon_image) {
        this.image = pokemon_image;
        this.ctx.beginPath();
        this.ctx.drawImage(this.image, this.x, this.y);
    };
    //build logo
    this.buildPokemonLogoImage = function () {
        let sourcePokemonLogoImage = document.getElementById(this.name);
        sourcePokemonLogoImage.src = "img/" + this.name + "-logo.png";
        return sourcePokemonLogoImage;
    };
    //vẽ logo góc trên pokemon
    this.drawPokemonLogo = function (pokemon_logo,x,y) {
        this.image = pokemon_logo;
        this.ctx.beginPath();
        this.ctx.drawImage(this.image,x,y);
    };
    //build name
    this.buildPokemonNameImage = function () {
        let sourcePokemonNameImage = document.getElementById(this.name);
        sourcePokemonNameImage.src = "img/" + this.name + "-name.png";
        return sourcePokemonNameImage;
    };
    //vẽ tên pokemon
    this.drawPokemonName = function (pokemon_name,x,y) {
        this.image = pokemon_name;
        this.ctx.beginPath();
        this.ctx.drawImage(this.image,x,y);
    };
    //build pokeball
    this.buildPokeball = function () {
        let sourcePokeballImage = document.getElementById("pokeball");
        sourcePokeballImage.src = "img/pokeball-" + this.name + ".png";
        return sourcePokeballImage;
    };
    //vẽ pokeball
    this.drawPokeball = function (pokemon_pokeball, index) {
        this.image = pokemon_pokeball;
        this.ctx.beginPath();
        this.ctx.drawImage(this.image, POKE_BALL_LEFT + (POKEBALL_DISTANCE*index), POKE_BALL_TOP);
    };
    //get element pokeball
    this.getPokeBall = function () {
        this.pokeball_image = document.getElementById("bag");
        this.pokeball_image.innerHTML += '<img src="img/pokeball-' + this.name + '.png" id="pokeball-' + this.name + '" style="display: none">';
    };
    //vẽ pokemon trong pokeball
    this.drawPokeBalls = function (index) {
        this.image = document.getElementById("pokeball-" + this.name);
        this.ctx.beginPath();
        this.ctx.drawImage(this.image, POKE_BALL_LEFT + (POKEBALL_DISTANCE*index), POKE_BALL_TOP);
    };
    //vẽ hiệu ứng tấn công pokemon
    this.drawEffect = function (effect, x, y) {
        this.image = effect;
        this.ctx.beginPath();
        this.ctx.drawImage(this.image, x, y)
    }
};