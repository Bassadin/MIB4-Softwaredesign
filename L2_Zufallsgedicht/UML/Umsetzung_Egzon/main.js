"use strict";
//Umsetzung UML-PDF von Manuel Proß
//https://manuel-pross.github.io/SofDesSS2020/L01/Sequenzdiagramm_L01.pdf
var Umsetzung_UML_Zufallsgedicht;
//Umsetzung UML-PDF von Manuel Proß
//https://manuel-pross.github.io/SofDesSS2020/L01/Sequenzdiagramm_L01.pdf
(function (Umsetzung_UML_Zufallsgedicht) {
    let subjekte = ["Harry", "zerstört", "Snape"];
    let verben = ["Hermine", "lernt mit", "McGonagall"];
    let objekte = ["Dumbledore", "liebt", "Ron"];
    let dictionary = new Array();
    dictionary[0] = subjekte;
    dictionary[1] = verben;
    dictionary[2] = objekte;
    let strophe;
    strophe = getVerse(dictionary);
    console.log(strophe);
    function getVerse(_dictionary) {
        let dictLength = _dictionary.length;
        let dictionaryCopy = Array.from(_dictionary);
        for (let j = 0; j < dictLength; j++) {
            let randomNumber = getRandomInt(0, dictLength - 1);
            for (let i = 0; i < _dictionary[0].length; i++) {
                _dictionary[j][i] =
                    dictionaryCopy[(j + randomNumber) % dictLength][i];
            }
        }
        return _dictionary;
    }
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
})(Umsetzung_UML_Zufallsgedicht || (Umsetzung_UML_Zufallsgedicht = {}));
//# sourceMappingURL=main.js.map