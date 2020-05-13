//Umsetzung UML-PDF von Manuel Proß
//https://manuel-pross.github.io/SofDesSS2020/L01/Sequenzdiagramm_L01.pdf

namespace UmsetzungUML {
    let sentence: string = prompt("Will your sentence into existence:", "Die Maus frisst Käse");

    twistWordsOnly(sentence);
    twistSentenceOnly(sentence);
    twistSentenceAndWords(sentence);

    function twistSentenceAndWords(_sentence: String) {
        let twisted: string = "";
        let i: number = _sentence.length - 1;

        for (i; i >= 0; i--) {
            twisted += _sentence[i];
        }

        console.log(twisted);
    }

    function twistWordsOnly(_sentence: String) {
        let words: string[] = [];
        words = _sentence.split(" ");
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

    function twistSentenceOnly(_sentence: String) {
        let words: string[] = [];
        words = _sentence.split(" ");
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
