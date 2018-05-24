const Top_Row = ['._.', '...', '._.', '._.', '...', '._.', '._.', '._.', '._.', '._.'];
const Middle_Row = ['|.|', '..|', '._|', '._|', '|_|', '|_.', '|_.', '..|', '|_|', '|_|'];
const Foot_Row = ['|_|', '..|', '|_.', '._|', '..|', '._|', '|_|', '..|', '|_|', '..|'];

class Digit {
    constructor(digit) {
        this.digit = digit;
    }

    getTopRow() {
        return Top_Row[this.digit];
    }

    getMiddleRow() {
        return Middle_Row[this.digit];
    }

    getFooterRow() {
        return Foot_Row[this.digit];
    }
}

let digit = new Digit();
module.exports = digit;