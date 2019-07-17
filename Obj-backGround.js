
let allBackGround = [];

function buildBackGround() {
    for (let i=0; i<dataBackGround.length; i++){
        let backGround = new BackGround(dataBackGround[i][0],dataBackGround[i][1]);
        allBackGround.push(backGround);
    }
}
buildBackGround();