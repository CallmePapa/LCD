describe('test', function () {
    let allLcdDigits;
    let input;

    beforeEach(function () {
        allLcdDigits = loadLcdDigit();
        input = 1314;
    });

    it("should print correct LCD", function () {
        spyOn(console, 'log');

        printLcdDigit(input);

        let expectLcdDigit = input + '的LCD数字' + '\n' + '... ' + '._. ' + '... ' + '...' + '\n'
            + '..| ' + '._| ' + '..| ' + '|_|' + '\n'
            + '..| ' + '._| ' + '..| ' + '..|';

        expect(console.log).toHaveBeenCalledWith(expectLcdDigit);
    });
});

describe('unit test', function () {
    let allLcdDigits;
    let input;

    beforeEach(function () {
        allLcdDigits = loadLcdDigit();
        input = 1314;
    });

    describe('buildDigitArray', function () {
        it("print correct digitArray", function () {
            "use strict";
            let digitArray = buildDigitArray(input);
            let experctDigitArray = ['1', '3', '1', '4'];

            expect(digitArray).toEqual(experctDigitArray);
        });
    });

    describe("buildDigitObject", function () {
        it('print correct digitObject', function () {
            let digitObject = buildDigitObject(buildDigitArray(input));

            let expectDigitObject = {
                1: ['...', '..|', '..|'],
                3: ['._.', '._|', '._|'],
                4: ['...', '|_|', '..|']
            };

            expect(digitObject).toEqual(expectDigitObject);
        });
    });
});