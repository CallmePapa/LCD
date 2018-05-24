let digitC = require('./digit');//引入定义的class类

module.exports = function main(input) {
    const digits = Array.from(input);//对其进行遍历
    let print = '';

    print += digits.map(digit => digitC.getTopRow(digit)).join(' ') + "\n";
    print += digits.map(digit => digitC.getMiddleRow(digit)).join(' ') + "\n";
    print += digits.map(digit => digitC.getFooterRow(digit)).join(' ') + "\n";
    return print;
};