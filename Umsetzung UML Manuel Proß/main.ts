//Umsetzung UML-PDF von Manuel Proß
//https://manuel-pross.github.io/SofDesSS2020/L01/Sequenzdiagramm_L01.pdf

namespace Umsetzung_UML {
    let sentence: string = prompt("Will your sentence into existence:", "Die Maus frisst Käse");

    twistWordsOnly(sentence);
    twistSentenceOnly(sentence);
    twistSentenceAndWords(sentence);

    function twistSentenceAndWords(sentence: String) {
        let twisted: string = "";
        let i: number = sentence.length - 1;

        for (i; i >= 0; i--) {
            twisted += sentence[i];
        }

        console.log(twisted);
    }

    function twistWordsOnly(sentence: String) {
        let words: string[] = [];
        words = sentence.split(" ");
        let twisted: string = "";

        for (let i: number = 0; i < words.length; i++) {
            for (let j: number = words[i].length - 1; j >= 0; j--) {
                if (j != 0) {
                    twisted += words[i][j];
                } else {
                    twisted += words[i][j] + " ";
                }
            }
        }

        console.log(twisted);
    }

    function twistSentenceOnly(sentence: String) {
        let words: string[] = [];
        words = sentence.split(" ");
        let twisted: string = "";
        let i: number = words.length - 1;

        for (i; i >= 0; i--) {
            if (i != 0) {
                twisted += words[i] + " ";
            } else {
                twisted += words[i];
            }
        }

        console.log(twisted);
    }
}
