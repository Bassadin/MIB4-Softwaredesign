//Umsetzung UML-PDF von Egzon Demaj
//https://exolicious.github.io/SoftDesSS2020/Uml/egzon_demaj_uml_zufallsgedicht.pdf

namespace Umsetzung_UML_Zufallsgedicht {
    let subjekte: string[] = ["Harry", "zerstört", "Snape"];
    let verben: string[] = ["Hermine", "lernt mit", "McGonagall"];
    let objekte: string[] = ["Dumbledore", "liebt", "Ron"];

    let dictionary: string[][] = new Array();
    dictionary[0] = subjekte;
    dictionary[1] = verben;
    dictionary[2] = objekte;

    let strophe: string[][];

    strophe = getVerse(dictionary);
    console.log(strophe);

    function getVerse(_dictionary: string[][]): string[][] {
        let dictLength = _dictionary.length;
        let dictionaryCopy = Array.from(_dictionary);

        for (let j = 0; j < dictLength; j++) {
            let randomNumber: number = getRandomInt(0, dictLength - 1);
            for (let i = 0; i < _dictionary[0].length; i++) {
                _dictionary[j][i] =
                    dictionaryCopy[(j + randomNumber) % dictLength][i];
            }
        }

        return _dictionary;
    }

    function getRandomInt(min: number, max: number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
