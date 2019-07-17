let allSpecialPosition = [];

function buildSpecialPosition() {
    for (let i=0; i<dataSpecialPosition.length; i++){
        let specialPosition = new SpecialPosition(dataSpecialPosition[i][0], dataSpecialPosition[i][1], dataSpecialPosition[i][2]);
        allSpecialPosition.push(specialPosition);
    }
}
buildSpecialPosition();