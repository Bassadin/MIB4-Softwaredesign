"use strict";
//Umsetzung UML-PDF von Manuel Proß
//https://manuel-pross.github.io/SofDesSS2020/L01/Sequenzdiagramm_L01.pdf
var Umsetzung_UML;
//Umsetzung UML-PDF von Manuel Proß
//https://manuel-pross.github.io/SofDesSS2020/L01/Sequenzdiagramm_L01.pdf
(function (Umsetzung_UML) {
    let sentence = "Die Maus frisst Käse";
    twistWordsOnly(sentence);
    twistSentenceOnly(sentence);
    twistSentenceAndWords(sentence);
    function twistSentenceAndWords(sentence) {
        let twisted = "";
        let i = sentence.length - 1;
        for (i; i >= 0; i--) {
            twisted += sentence[i];
        }
        console.log(twisted);
    }
    function twistWordsOnly(sentence) {
        let words = [];
        words = sentence.split(" ");
        let twisted = "";
        for (let i = 0; i < words.length; i++) {
            for (let j = words[i].length - 1; j >= 0; j--) {
                if (j != 0) {
                    twisted += words[i][j];
                }
                else {
                    twisted += words[i][j] + " ";
                }
            }
        }
        console.log(twisted);
    }
    function twistSentenceOnly(sentence) {
        let words = [];
        words = sentence.split(" ");
        let twisted = "";
        let i = words.length - 1;
        for (i; i >= 0; i--) {
            if (i != 0) {
                twisted += words[i] + " ";
            }
            else {
                twisted += words[i];
            }
        }
        console.log(twisted);
    }
})(Umsetzung_UML || (Umsetzung_UML = {}));
//# sourceMappingURL=main.js.map