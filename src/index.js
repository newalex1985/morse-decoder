const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {

    let expression = '';
    const letterLength = 10;
    for (let i = 0; i < expr.length / letterLength; i += 1) {
        let letter = '';
        let letterString = expr.slice(i * letterLength, letterLength * (i + 1));
        for (let j = 0; j < letterLength; j += 2) {
            if ((letterString[j] === '1') && (letterString[j + 1] === '0')) {
                letter += '.';
            } else if ((letterString[j] === '1') && (letterString[j + 1] === '1')) {
                letter += '-';
            } else if ((letterString[j] === '*') && (letterString[j + 1] === '*')) {
                letter = 'space';
                break;
            }
        }
        expression += (letter === 'space') ? ' ' : MORSE_TABLE[letter];
    }
    return expression;

}

module.exports = {
    decode
}