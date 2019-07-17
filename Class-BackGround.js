let BackGround = function (name, type) {
    this.name = name;
    this.type = type;

    this.canvas = canvas;
    this.ctx = ctx;

    //vẽ hình nền
    this.buildBackGround = function (background_name) { //không dùng tính năng này vì không hiện ở lần load đầu tiên
        let sourceBackGround = document.getElementById("background");
        sourceBackGround.src = "img/background-" + background_name + ".png";
        return sourceBackGround;
    };

    this.drawBackground = function () {
        this.image = document.getElementById("background-" + this.name);
        this.ctx.beginPath();
        this.ctx.drawImage(this.image, BACKGROUND, BACKGROUND);
    }
};