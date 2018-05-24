function buildDigitArray(input) {
    "use strict";
    return input.toString().split('');
}
function buildDigitObject(digitArray) {
    "use strict";
    let lcdDigitObject = loadLcdDigit();
    let lcdDigitArray = Object.keys(lcdDigitObject);
    let digitObject = [];
    digitArray.forEach(function (digitElement) {
        for (let i = 0; i < lcdDigitArray.length; i++) {
            if (digitElement === lcdDigitArray[i]) {
                digitObject[digitElement] = lcdDigitObject[lcdDigitArray[i]];
            }
        }
    });
    return digitObject;
}

function printLcdDigit(input) {
    let digitArray = buildDigitArray(input);
    let digitObject = buildDigitObject(digitArray);
    print(input, digitObject);
}

function print(input, digitObject) {
    let expectLcdDigit = input + '的LCD数字';
    let inputArray = Object.keys(digitObject);

    for (let i = 0; i < inputArray.length; i++) {
        for (let j = 0; j < digitObject[inputArray[i]].length; j++) {
            expectLcdDigit += '\n' + digitObject[inputArray[i]][j] + ' ' + digitObject[inputArray[i + 1]][j] + ' '
                + digitObject[inputArray[i]][j] + ' ' + digitObject[inputArray[i + 2]][j];
        }
        break;

    }
    console.log(expectLcdDigit);
}



